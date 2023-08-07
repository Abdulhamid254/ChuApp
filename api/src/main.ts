import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from 'passport';
import * as session from 'express-session';
import { DataSource } from 'typeorm';
import { Session } from './utils/typeorm';
import { TypeormStore } from 'connect-typeorm';

async function bootstrap() {
  const { PORT, COOKIE_SECRET } = process.env;
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: ['http://localhost:3000'], credentials: true });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const dataSource = app.get(DataSource);
  const sessionRepository = dataSource.getRepository(Session);

  app.use(
    session({
      secret: COOKIE_SECRET,
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: 24 * 60 * 60, // cookie expire 1 day later
      },
      // making the sessions to persist
      store: new TypeormStore().connect(sessionRepository),
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  try {
    await app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
