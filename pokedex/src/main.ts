import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);


  app.setGlobalPrefix('api') //! prefijo global de las rutas

  app.useGlobalPipes( //! configuracion global de las  validaciones
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true
      }
    })
  )
}
await main();
