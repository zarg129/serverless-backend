import { StatusType, TransportType } from "../../../lib/services/database/entities/interfaces/interfaces";
export interface RoutesAddRouteInterface {
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
