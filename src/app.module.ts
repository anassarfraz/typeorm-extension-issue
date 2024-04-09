import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
//controllers
import { AppController } from './app.controller';
//services
import { AppService } from './app.service';
//config
import configuration from './config';
//providers
import { TypeormProvider } from './typeorm.provider';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync(TypeormProvider),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
