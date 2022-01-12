import { ConnectionOptions } from 'typeorm';
import { TagEntity } from './tag/tag.entity';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mediumclone',
  password: 'Butwal12',
  database: 'mediumclone',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: { migrationsDir: 'src/migrations' },
};

export default config;
