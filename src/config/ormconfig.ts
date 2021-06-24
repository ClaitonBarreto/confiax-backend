import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const ormconfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'myroot',
  database: 'confiax',
  entities: ['dist/database/models/**/*.entity.js'],
  migrationsTableName: 'migrations',
  migrations: ['database/migrations/**/*.{ts,js}'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

export default ormconfig;
