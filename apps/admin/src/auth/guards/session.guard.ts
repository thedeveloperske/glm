import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class SessionGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const response = context.switchToHttp().getResponse<Response>();
    
    // Check if user is logged in (has session cookie)
    const isAuthenticated = request.cookies?.isAuthenticated === 'true' && 
                           request.cookies?.userEmail;
    
    if (!isAuthenticated) {
      // Redirect to login page
      response.redirect('/auth/login');
      return false;
    }
    
    // Attach user info to request
    request['user'] = {
      email: request.cookies.userEmail,
      id: request.cookies.userId,
    };
    
    return true;
  }
}

