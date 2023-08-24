import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterColumn1692793291182 implements MigrationInterface {
    name = 'AlterColumn1692793291182'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "user_phonenumber" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "user_createdat" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "user_deletedat" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "users" ADD "user_updatedat" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "user_updatedat"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "user_deletedat"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "user_createdat"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "user_phonenumber"`);
    }

}
