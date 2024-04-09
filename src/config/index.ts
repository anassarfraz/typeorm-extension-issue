import { ConfigDto } from './config.dto';
import { dataSourceOptions } from './database';
import { DatabaseObjectType } from './database.dto';

export default (): ConfigDto => {
  const database: DatabaseObjectType = {
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_NAME: process.env.DATABASE_NAME,
    DATABASE_PORT: process.env.DATABASE_PORT,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_USERNAME: process.env.DATABASE_USERNAME,
  };

  return {
    NODE_ENV: process.env.NODE_ENV,

    // database envs
    database: dataSourceOptions(database),

    // jwt envs
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRY: process.env.JWT_EXPIRY,

    //send grid templates

    INVITATION_ORG_TEMPLATE_ID: process.env.INVITATION_ORG_TEMPLATE_ID,
    INVITATION_CUSTOMER_TEMPLATE_ID:
      process.env.INVITATION_CUSTOMER_TEMPLATE_ID,
    FORGOT_PASSWORD_TEMPLATE_ID: process.env.FORGOT_PASSWORD_TEMPLATE_ID,
    GRAND_INVOICE_TEMPLATE_ID: process.env.GRAND_INVOICE_TEMPLATE_ID,
    XML_ORDER_ERROR_TEMPLATE_ID: process.env.XML_ORDER_ERROR_TEMPLATE_ID,

    //send grid

    FROM_EMAIL: process.env.FROM_EMAIL,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,

    // front end url

    PORTAL_APP_BASE_URL: process.env.PORTAL_APP_BASE_URL,
    CUSTOMER_PORTAL_BASE_URL: process.env.CUSTOMER_PORTAL_BASE_URL,
    PORTAL_API_BASE_URL: process.env.PORTAL_API_BASE_URL,

    //  stripe keys

    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
    STRIPE_PRIVATE_KEY: process.env.STRIPE_PRIVATE_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,

    //  Aws S3 bucket

    AWS_REGION: process.env.AWS_REGION,
    AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,

    // Aws credentials

    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_SECRET_MANAGER_ACCESS_KEY: process.env.AWS_SECRET_MANAGER_ACCESS_KEY,

    // Authorize credentials

    AUTHORIZE_KEY: process.env.AUTHORIZE_KEY,
    AUTHORIZE_LOGIN_ID: process.env.AUTHORIZE_LOGIN_ID,
    AUTHORIZE_ENVIRONMENT: process.env.AUTHORIZE_ENVIRONMENT,
    AUTHORIZE_TRANSACTION_KEY: process.env.AUTHORIZE_TRANSACTION_KEY,

    // STAMPS
    STAMPS_AUTH_URL: process.env.STAMPS_AUTH_URL,
    STAMPS_API_URL: process.env.STAMPS_API_URL,

    // STAMPS ENV
    STAMPS_ENV: process.env.STAMPS_ENV,

    // REDIS
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: Number(process.env.REDIS_PORT),
  };
};
