// import { dirname } from 'path';
// import { MysqlConnectionOptions } from 'typeorm/browser/driver/mysql/MysqlConnectionOptions';
// import { fileURLToPath } from 'url';
// import { getEnvVariable } from '../../../utils/utils';
// import { RouteEntity } from '../entities/route.entity';
// import * as path from "path";
//
//  const __dirname = path.dirname(__filename);
//
// export const typeormConfig: MysqlConnectionOptions = {
//   type: 'mysql',
//   host: getEnvVariable('DATABASE_HOST'),
//   port: parseInt(getEnvVariable('DATABASE_PORT')),
//   database: getEnvVariable('DATABASE_NAME'),
//   username: getEnvVariable('DATABASE_USER'),
//   password: getEnvVariable('DATABASE_PASSWORD'),
//   entities: [RouteEntity],
//   // migrations: [`${filePath}/../../../../migrations/**/*.js`],
//   synchronize: false,
//   logging: false,
//   // re
//   //     autoLoadEntities: true,
//   //     retryDelay: 3500,
// };
//
// export function parseImportUrl(url: string): string {
//   return dirname(fileURLToPath(url)).replace(/\.[a-z]+$/, '');
// }
