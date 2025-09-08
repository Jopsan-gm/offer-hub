import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS
  app.enableCors();
  
  const port = process.env.PORT || 4000;
  await app.listen(port);
  
  console.log(`🚀 OFFER-HUB GraphQL server is live at http://localhost:${port}`);
  console.log(`📊 GraphQL Playground available at http://localhost:${port}/graphql`);
  console.log('🌐 Connecting freelancers and clients around the world...');
}

bootstrap();
