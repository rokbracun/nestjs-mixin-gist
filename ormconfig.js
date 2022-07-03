// Variables in a real project should not be hardcoded!
const typeOrmConfig = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'mixin-gist',
  entities: [`${__dirname}/src/**/*.entity.{js,ts}`],
  migrations: [`${__dirname}/src/migrations/*.{ts,js}`],
};

module.exports = typeOrmConfig;
