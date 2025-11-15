import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        // Custom extractor for cookies - passport-jwt passes the request object
        (request: any) => {
          console.log('=== JWT Extractor called ===');
          console.log('Request object:', request ? 'exists' : 'null/undefined');
          
          if (!request) {
            console.log('✗ Request is null/undefined');
            return null;
          }
          
          // Try multiple ways to access the request
          const req = request.req || request; // Sometimes nested in NestJS
          
          console.log('Request keys:', Object.keys(req).slice(0, 10));
          console.log('Has cookies:', !!req.cookies);
          console.log('Has headers:', !!req.headers);
          
          let token = null;
          
          // Method 1: Try to get from parsed cookies (cookie-parser middleware)
          if (req.cookies && req.cookies.access_token) {
            token = req.cookies.access_token;
            console.log('✓ Token found in req.cookies.access_token');
            return token;
          }
          
          // Method 2: Parse cookies from headers manually
          if (req.headers && req.headers.cookie) {
            const cookieString = req.headers.cookie;
            console.log('Cookie header found, length:', cookieString.length);
            
            const cookies: any = {};
            cookieString.split(';').forEach((cookie: string) => {
              const parts = cookie.trim().split('=');
              if (parts.length === 2) {
                const key = parts[0].trim();
                const value = decodeURIComponent(parts[1].trim());
                cookies[key] = value;
              }
            });
            
            console.log('Parsed cookie keys:', Object.keys(cookies));
            
            if (cookies.access_token) {
              token = cookies.access_token;
              console.log('✓ Token found in headers.cookie (parsed)');
              return token;
            }
          }
          
          console.log('✗ No token found in cookies or headers');
          return null;
        },
        // Fallback to Authorization header
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'your-secret-key',
    });
  }

  async validate(payload: any) {
    console.log('JWT Strategy validate called');
    console.log('Payload:', JSON.stringify(payload, null, 2));
    
    if (!payload) {
      console.log('✗ No payload provided');
      throw new UnauthorizedException('Invalid token payload');
    }
    
    if (!payload.sub || !payload.email) {
      console.log('✗ Invalid payload structure - missing sub or email');
      throw new UnauthorizedException('Invalid token payload');
    }
    
    console.log('✓ Token validated successfully');
    return { id: payload.sub, email: payload.email };
  }
}

