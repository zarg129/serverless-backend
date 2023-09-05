import { RoutesAddRouteInterface } from '../interfaces/interfaces';
import { StatusType } from '../../../lib/services/database/entities/interfaces/interfaces';
declare const transportTypes: readonly ["private", "passenger", "cargo"];
export type TransportTypes = (typeof transportTypes)[number];
export declare class RoutesAddRouteRequest implements RoutesAddRouteInterface {
    departureCity: string;
    destinationCity: string;
    distance: number;
    departureDate: Date;
    executionDate: Date;
    requiredTransportType: TransportTypes;
    expectedRevenue: number;
    transportId: string;
    status: StatusType;
}
export {};
