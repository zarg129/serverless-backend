import { EntitiesInterface } from 'src/lib/services/database/entities/interfaces/interfaces.js';
import { RoutesService } from './routes.service.js';
import { RoutesAddRouteRequest } from './request/request';
export declare class RoutesController {
    private readonly routeService;
    constructor(routeService: RoutesService);
    findAll(): Promise<EntitiesInterface[]>;
    addRoute(body: RoutesAddRouteRequest): Promise<RoutesAddRouteRequest>;
    deleteRoute(body: any): Promise<any>;
    updateRoute(body: any): Promise<any>;
}
