import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // Enable CORS with proper cookie support
  const allowedOrigins = process.env.FRONTEND_URL 
    ? [process.env.FRONTEND_URL]
    : ['http://localhost:3000', 'http://localhost:4000', 'http://127.0.0.1:4000'];
  
  app.enableCors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, Postman, or same-origin requests)
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(null, true); // Allow all origins in development (change in production)
      }
    },
    credentials: true, // This is crucial for cookies to work
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
    exposedHeaders: ['Set-Cookie'],
  });

  // Cookie parser for JWT tokens
  app.use(cookieParser());

  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe());

  // Serve static files from public directory
  app.useStaticAssets(path.join(__dirname, '..', 'public'), {
    prefix: '/public/',
  });

  // Set view engine for templates
  app.setBaseViewsDir(path.join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  const port = process.env.PORT || 4000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();

