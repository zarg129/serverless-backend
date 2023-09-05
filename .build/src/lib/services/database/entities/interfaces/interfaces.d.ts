export interface RouteEntityInterface {
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
export interface TransportEntityInterface {
    uuid: string;
    licensePlate: string;
    status: TransportStatusType;
    model: string;
    acquisitionDate: Date;
    mileage: number;
    transportType: TransportType;
    routeId: string;
}
export type TransportType = 'private' | 'passenger' | 'cargo';
export type StatusType = 'waiting' | 'ongoing';
export type TransportStatusType = 'free' | 'busy';
export type EntitiesInterface = TransportEntityInterface | RouteEntityInterface;
