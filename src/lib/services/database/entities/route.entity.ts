import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {
  RouteEntityInterface,
  StatusType,
  TransportType,
} from './interfaces/interfaces';

@Entity({ name: 'routes' })
export class RouteEntity implements RouteEntityInterface {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  departureCity: string;

  @Column()
  destinationCity: string;

  @Column()
  distance: number;

  @Column()
  departureDate: Date;

  @Column()
  executionDate: Date;

  @Column()
  requiredTransportType: TransportType;

  @Column()
  expectedRevenue: number;

  @Column()
  transportId: string;

  @Column()
  status: StatusType;
}
