import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransportEntity } from '../../lib/services/database/entities/transport.entity';
import { DatabaseService } from '../../lib/services/database/database.service';

@Injectable()
export class TransportService {
  constructor(
    @InjectRepository(TransportEntity)
    private readonly transportRepository: Repository<TransportEntity>,
    private readonly databaseService: DatabaseService,
  ) {}

  async findAll(): Promise<TransportEntity[]> {
    try {
      return (await this.databaseService.find(
        TransportEntity,
      )) as TransportEntity[];
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async addTransport(transport): Promise<void> {
    const transportEntity = new TransportEntity();

    transportEntity.licensePlate = transport.licensePlate;
    transportEntity.status = transport.status;
    transportEntity.model = transport.model;
    transportEntity.acquisitionDate = transport.acquisitionDate;
    transportEntity.mileage = transport.mileage;
    transportEntity.transportType = transport.transportType;
    transportEntity.routeId = transport.routeId ? transport.routeId : null;

    await this.databaseService.insert(TransportEntity, transportEntity);
  }

  async deleteTransport(uuid): Promise<void> {
    await this.databaseService.delete(TransportEntity, uuid);
  }

  async updateTransport(uuid, transport): Promise<void> {
    const transportEntity = new TransportEntity();

    transportEntity.licensePlate = transport.licensePlate;
    transportEntity.status = transport.status;
    transportEntity.model = transport.model;
    transportEntity.acquisitionDate = transport.acquisitionDate;
    transportEntity.mileage = transport.mileage;
    transportEntity.transportType = transport.transportType;
    transportEntity.routeId = transport.routeId ? transport.routeId : null;

    if (!validateEmptyObject(transportEntity)) {
      await this.databaseService.update(TransportEntity, uuid, transportEntity);
    }
  }
}

function validateEmptyObject(object: object): boolean {
  return Object.keys(object).length === 0;
}
