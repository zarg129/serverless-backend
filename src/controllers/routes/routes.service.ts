import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RouteEntity } from '../../lib/services/database/entities/route.entity.js';
import { DatabaseService } from '../../lib/services/database/database.service';

@Injectable()
export class RoutesService {
  constructor(
    @InjectRepository(RouteEntity)
    private readonly routeRepository: Repository<RouteEntity>,
    private readonly databaseService: DatabaseService,
  ) {}

  async findAll(): Promise<RouteEntity[]> {
    try {
      return (await this.databaseService.find(RouteEntity)) as RouteEntity[];
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async addRoute(route): Promise<void> {
    const routeEntity = new RouteEntity();

    routeEntity.departureCity = route.departureCity;
    routeEntity.destinationCity = route.destinationCity;
    routeEntity.distance = route.distance;
    routeEntity.departureDate = route.departureDate;
    routeEntity.executionDate = route.executionDate;
    routeEntity.requiredTransportType = route.requiredTransportType;
    routeEntity.expectedRevenue = route.expectedRevenue;
    routeEntity.transportId = route.transportId ? route.transportId : null;
    routeEntity.status = route.status;

    await this.databaseService.insert(RouteEntity, routeEntity);
  }

  async deleteRoute(uuid): Promise<void> {
    await this.databaseService.delete(RouteEntity, uuid);
  }

  async updateRoute(uuid, route): Promise<void> {
    const routeEntity = new RouteEntity();

    routeEntity.departureCity = route.departureCity;
    routeEntity.destinationCity = route.destinationCity;
    routeEntity.distance = route.distance;
    routeEntity.departureDate = route.departureDate;
    routeEntity.executionDate = route.executionDate;
    routeEntity.requiredTransportType = route.requiredTransportType;
    routeEntity.expectedRevenue = route.expectedRevenue;
    routeEntity.transportId = route.transportId ? route.transportId : null;
    routeEntity.status = route.status;

    if (!validateEmptyObject(route)) {
      await this.databaseService.update(RouteEntity, uuid, routeEntity);
    }
  }
}

function validateEmptyObject(object: object): boolean {
  return Object.keys(object).length === 0;
}
