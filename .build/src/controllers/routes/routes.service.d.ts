import { Repository } from 'typeorm';
import { RouteEntity } from '../../lib/services/database/entities/route.entity.js';
import { DatabaseService } from '../../lib/services/database/database.service';
export declare class RoutesService {
    private readonly routeRepository;
    private readonly databaseService;
    constructor(routeRepository: Repository<RouteEntity>, databaseService: DatabaseService);
    findAll(): Promise<RouteEntity[]>;
    addRoute(route: any): Promise<void>;
    deleteRoute(uuid: any): Promise<void>;
    updateRoute(uuid: any, route: any): Promise<void>;
}
