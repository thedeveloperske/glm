import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any, context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    
    if (err || !user) {
      // Log for debugging (remove in production)
      if (info) {
        console.error('JWT Auth Error:', info.message || info);
      }
      if (err) {
        console.error('JWT Auth Exception:', err);
      }
      // Check if cookie exists for debugging
      if (request && request.cookies) {
        console.log('Cookies present:', Object.keys(request.cookies));
      } else {
        console.log('No cookies found in request');
      }
      throw err || new UnauthorizedException('Authentication required. Please login.');
    }
    return user;
  }
}

