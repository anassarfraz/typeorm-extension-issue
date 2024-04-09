import { ConfigModule } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
//config
import { DatabaseConfig } from './database.config';
//module

export const TypeormProvider: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useClass: DatabaseConfig,
};
