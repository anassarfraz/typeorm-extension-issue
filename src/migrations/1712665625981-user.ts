import { MigrationInterface, QueryRunner } from 'typeorm';

export class User1712665625981 implements MigrationInterface {
  name = 'User1712665625981';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "User" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying, "lastName" character varying, "email" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_4a257d2c9837248d70640b3e36e" UNIQUE ("email"), CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "User"`);
  }
}
