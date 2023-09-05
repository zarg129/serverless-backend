import { TransportEntityInterface, TransportStatusType, TransportType } from './interfaces/interfaces';
export declare class TransportEntity implements TransportEntityInterface {
    uuid: string;
    licensePlate: string;
    status: TransportStatusType;
    model: string;
    acquisitionDate: Date;
    mileage: number;
    transportType: TransportType;
    routeId: string;
}
