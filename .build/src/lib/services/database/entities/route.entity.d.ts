import { RouteEntityInterface, StatusType, TransportType } from './interfaces/interfaces';
export declare class RouteEntity implements RouteEntityInterface {
    uuid: string;
    departureCity: string;
    destinationCity: string;
    distance: number;
    departureDate: Date;
    executionDate: Date;
    requiredTransportType: TransportType;
    expectedRevenue: number;
    transportId: string;
    status: StatusType;
}
