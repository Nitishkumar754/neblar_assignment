import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// import EntityNotFoundErrorFilter from './exceptions/entity-not-found-error';
// import InternalSeverErrorFilter from './exceptions/internal-server-error';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.useGlobalFilters();
  const PORT = app.get(ConfigService).get('PORT');

  await app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`);
  });
}
bootstrap();
