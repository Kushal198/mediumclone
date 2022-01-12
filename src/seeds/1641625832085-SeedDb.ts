import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1641625832085 implements MigrationInterface {
  name = 'SeedDb1641625832085';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'),('coffee'), ('nestjs')`,
    );

    await queryRunner.query(
      //pass Butwal12
      `INSERT INTO users (username, email, password) VALUES ('foo', 'foo@gmail.com', '$2b$10$Wbb973GxcWArhT9iO7M2Yu8PyEHrkGrsXX/UJtFrh1xBQASG.VuhS')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First Article', 'First article description', 'First article body', 'coffee,dragons', 1),
        ('second-article', 'Second Article', 'Second article description', 'Second article body', 'coffee,dragons', 1)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
