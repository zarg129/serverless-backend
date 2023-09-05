import { Repository } from 'typeorm';
import { TransportEntity } from '../../lib/services/database/entities/transport.entity';
import { DatabaseService } from '../../lib/services/database/database.service';
export declare class TransportService {
    private readonly transportRepository;
    private readonly databaseService;
    constructor(transportRepository: Repository<TransportEntity>, databaseService: DatabaseService);
    findAll(): Promise<TransportEntity[]>;
    addTransport(transport: any): Promise<void>;
    deleteTransport(uuid: any): Promise<void>;
    updateTransport(uuid: any, transport: any): Promise<void>;
}
