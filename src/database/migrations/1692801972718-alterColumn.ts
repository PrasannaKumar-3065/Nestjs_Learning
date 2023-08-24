import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterColumn1692801972718 implements MigrationInterface {
    name = 'AlterColumn1692801972718'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "user_phonenumber"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "user_phonenumber" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "user_phonenumber"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "user_phonenumber" integer NOT NULL`);
    }

}
