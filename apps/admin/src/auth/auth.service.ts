import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  // Static login credentials
  private users = [
    {
      id: 1,
      email: 'admin@mua.co.ke',
      password: '', // Will be hashed on first use
    },
  ];

  private async ensureDefaultPassword() {
    if (!this.users[0].password) {
      this.users[0].password = await bcrypt.hash('admin123', 10);
    }
  }

  async validateUser(email: string, password: string): Promise<any> {
    await this.ensureDefaultPassword();
    
    const user = this.users.find((u) => u.email === email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const { password: _, ...result } = user;
    return result;
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.email, loginDto.password);
    return {
      user: {
        id: user.id,
        email: user.email,
      },
    };
  }
}

