import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  UseGuards,
  Request,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SessionGuard } from './guards/session.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  showLoginPage(@Res() res: Response) {
    return res.render('login', {
      title: 'Login - GLM Admin',
      error: null,
    });
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    try {
      const result = await this.authService.login(loginDto);
      
      // Set session cookies (simple authentication)
      const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax' as const,
        path: '/',
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
      };
      
      res.cookie('isAuthenticated', 'true', cookieOptions);
      res.cookie('userEmail', result.user.email, cookieOptions);
      res.cookie('userId', result.user.id.toString(), cookieOptions);
      
      // Redirect to dashboard
      return res.redirect('/dashboard');
    } catch (error) {
      return res.render('login', {
        title: 'Login - GLM Admin',
        error: 'Invalid email or password',
      });
    }
  }

  @Post('logout')
  logout(@Res() res: Response) {
    const cookieOptions = {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax' as const,
    };
    
    res.clearCookie('isAuthenticated', cookieOptions);
    res.clearCookie('userEmail', cookieOptions);
    res.clearCookie('userId', cookieOptions);
    
    return res.redirect('/auth/login');
  }

  @UseGuards(SessionGuard)
  @Get('me')
  getProfile(@Request() req) {
    return req['user'];
  }
}

