import { RoutesAddRouteInterface } from '../interfaces/interfaces';
import {
  IsDate,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { StatusType } from '../../../lib/services/database/entities/interfaces/interfaces';

const transportTypes = ['private', 'passenger', 'cargo'] as const;
export type TransportTypes = (typeof transportTypes)[number];
const statusTypes = ['waiting', 'ongoing'];
export class RoutesAddRouteRequest implements RoutesAddRouteInterface {
  @IsString()
  @IsNotEmpty()
  departureCity: string;

  @IsString()
  @IsNotEmpty()
  destinationCity: string;

  @IsNumber()
  @IsNotEmpty()
  distance: number;

  @IsDate()
  @IsNotEmpty()
  departureDate: Date;

  @IsDate()
  @IsNotEmpty()
  executionDate: Date;

  @IsString()
  @IsNotEmpty()
  @IsIn(transportTypes)
  requiredTransportType: TransportTypes;

  @IsNumber()
  @IsNotEmpty()
  expectedRevenue: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  transportId: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(statusTypes)
  status: StatusType;
}
