import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransportService } from './transport.service';
import { TransportEntity } from '../../lib/services/database/entities/transport.entity';
import { TransportController } from './transport.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TransportEntity])],
  controllers: [TransportController],
  providers: [TransportService],
  exports: [TransportService],
})
export class TransportModule {}
