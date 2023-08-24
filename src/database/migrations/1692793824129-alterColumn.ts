import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterColumn1692793824129 implements MigrationInterface {
    name = 'AlterColumn1692793824129'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ADD "post_postorder" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD "post_createdat" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "post" ADD "post_deletedat" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "post" ADD "post_updatedat" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "post_updatedat"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "post_deletedat"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "post_createdat"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "post_postorder"`);
    }

}
