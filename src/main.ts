import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    // ✅ Enable CORS to allow requests from Angular
    app.enableCors({
      origin: 'http://localhost:4200',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      allowedHeaders: 'Content-Type, Accept',
    });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
