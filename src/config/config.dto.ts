import { DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

export type ConfigDto = {
  NODE_ENV: string;

  // database

  database: DataSourceOptions & SeederOptions;

  // jwt keys

  JWT_SECRET: string;
  JWT_EXPIRY: string;
};
