import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { BenefitsModule } from './benefits/benefits.module';
import { ProductsModule } from './products/products.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    DashboardModule,
    BenefitsModule,
    ProductsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}

