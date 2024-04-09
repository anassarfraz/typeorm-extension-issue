import { DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { DatabaseObjectType } from './database.dto';

export const dataSourceOptions = (
  env: DatabaseObjectType,
): DataSourceOptions & SeederOptions => ({
  type: 'postgres',
  host: env.DATABASE_HOST || '',
  port: parseInt(env.DATABASE_PORT) || 5432,
  username: env.DATABASE_USERNAME || '',
  password: env.DATABASE_PASSWORD || '',
  database: env.DATABASE_NAME || '',
  synchronize: false, //always be false for production
  logging: false,
  migrationsRun: true,
  entities: ['dist/**/**/*.entity{.js, .ts}'],
  migrations: ['dist/migrations/*{.js, .ts}'],
  seeds: ['src/seeders/*.seeder{.ts,.js}'],
});

export const prodDataSourceOptions = (
  res,
): DataSourceOptions & SeederOptions => ({
  type: 'postgres',
  host: res?.host || '',
  port: res?.port || 5432,
  username: res?.username || '',
  password: res?.password || '',
  database: res?.dbName || '',
  synchronize: false, //always be false for production
  logging: true,
  migrationsRun: true,
  entities: ['dist/**/**/*.entity{.js, .ts}'],
  migrations: ['dist/migrations/*{.js, .ts}'],
  seeds: ['src/seeders/*.seeder{.ts,.js}'],
});
