import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { TransportEntity } from '../../lib/services/database/entities/transport.entity';
import { TransportService } from './transport.service';

@Controller('transport')
export class TransportController {
  constructor(private readonly transportService: TransportService) {}

  @Get()
  async findAll(): Promise<TransportEntity[]> {
    return await this.transportService.findAll();
  }

  @Post()
  async addTransport(@Body() body: any): Promise<any> {
    await this.transportService.addTransport(body);

    return body;
  }

  @Delete()
  async deleteTransport(@Body() body: any) {
    await this.transportService.deleteTransport(body.uuid);

    return body;
  }

  @Patch()
  async updateTransport(@Body() body: any) {
    await this.transportService.updateTransport(body.uuid, body.route);

    return body;
  }
}
