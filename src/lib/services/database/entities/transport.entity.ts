import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {
  TransportEntityInterface,
  TransportStatusType,
  TransportType,
} from './interfaces/interfaces';

@Entity({ name: 'transport' })
export class TransportEntity implements TransportEntityInterface {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  licensePlate: string;

  @Column()
  status: TransportStatusType;

  @Column()
  model: string;

  @Column({ type: 'date' })
  acquisitionDate: Date;

  @Column()
  mileage: number;

  @Column()
  transportType: TransportType;

  @Column()
  routeId: string;
}
