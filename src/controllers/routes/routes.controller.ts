import { Body, Controller, Delete, Get, Post, Patch } from '@nestjs/common';
import { EntitiesInterface } from 'src/lib/services/database/entities/interfaces/interfaces.js';
import { RoutesService } from './routes.service.js';
import { RoutesAddRouteRequest } from './request/request';

@Controller('routes')
export class RoutesController {
  constructor(private readonly routeService: RoutesService) {}

  @Get()
  async findAll(): Promise<EntitiesInterface[]> {
    return await this.routeService.findAll();
  }

  @Post()
  async addRoute(
    @Body() body: RoutesAddRouteRequest,
  ): Promise<RoutesAddRouteRequest> {
    await this.routeService.addRoute(body);

    return body;
  }

  @Delete()
  async deleteRoute(@Body() body: any) {
    await this.routeService.deleteRoute(body.uuid);

    return body;
  }

  @Patch()
  async updateRoute(@Body() body: any) {
    await this.routeService.updateRoute(body.uuid, body.route);

    return body;
  }
}
