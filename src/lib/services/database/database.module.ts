import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getEnvVariable } from '../../utils/utils';
// import { filePath } from './config/typeorm.config';
import { RouteEntity } from './entities/route.entity';
import { TransportEntity } from './entities/transport.entity';
import { DatabaseService } from './database.service';
@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: getEnvVariable('DATABASE_HOST'),
      port: parseInt(getEnvVariable('DATABASE_PORT')),
      database: getEnvVariable('DATABASE_NAME'),
      username: getEnvVariable('DATABASE_USER'),
      password: getEnvVariable('DATABASE_PASSWORD'),
      entities: [RouteEntity, TransportEntity],
      migrations: [`${__dirname}/../../../migrations/**/*.js`],
      synchronize: false,
      logging: false,
      retryAttempts: 10,
      autoLoadEntities: true,
      retryDelay: 3500,
      migrationsRun: true,
    }),
  ],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
