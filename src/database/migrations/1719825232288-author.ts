import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Author1719825232288 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "authors",
                columns: [
                    {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                    } ,
                    {
                        name: "name",
                        type: "varchar",
                        length: "255"
                    } ,
                    {
                        name: "nationality",
                        type: "varchar",
                        length: "150"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('authors')
    }
}
