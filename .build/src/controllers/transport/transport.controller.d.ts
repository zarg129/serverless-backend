import { TransportEntity } from '../../lib/services/database/entities/transport.entity';
import { TransportService } from './transport.service';
export declare class TransportController {
    private readonly transportService;
    constructor(transportService: TransportService);
    findAll(): Promise<TransportEntity[]>;
    addTransport(body: any): Promise<any>;
    deleteTransport(body: any): Promise<any>;
    updateTransport(body: any): Promise<any>;
}
