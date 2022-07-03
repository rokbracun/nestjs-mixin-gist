import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPersonEntity1656868074544 implements MigrationInterface {
  name = 'AddPersonEntity1656868074544';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "person" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "surname" character varying NOT NULL, "carId" integer, CONSTRAINT "REL_e697ff7f943b80184575cc6348" UNIQUE ("carId"), CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ADD CONSTRAINT "FK_e697ff7f943b80184575cc63480" FOREIGN KEY ("carId") REFERENCES "car"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "person" DROP CONSTRAINT "FK_e697ff7f943b80184575cc63480"`,
    );
    await queryRunner.query(`DROP TABLE "person"`);
  }
}
