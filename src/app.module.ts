import { Module } from '@nestjs/common';
import { ConfigModule } from './lib/config/config.module';
import { DatabaseModule } from './lib/services/database/database.module';
import { RoutesModule } from './controllers/routes/routes.module';
import { TransportModule } from './controllers/transport/transport.module';

@Module({
  imports: [ConfigModule, DatabaseModule, RoutesModule, TransportModule],
})
export class AppModule {}
