import { NestFactory } from '@nestjs/core';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // So funktioniert es
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://192.168.20.54',
      logger: console,
    }),
  );

  // Das funktioniert nicht
  // app.use(
  //   '/proxy',
  //   createProxyMiddleware({
  //     target: 'http://192.168.20.54',
  //     pathRewrite: {
  //       '/proxy': '/',
  //     },
  //   }),
  // );
  await app.listen(3000);
}
bootstrap();
