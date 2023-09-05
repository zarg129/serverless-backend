import { EntityManager } from 'typeorm';
import { EntitiesInterface } from './entities/interfaces/interfaces';
export declare class DatabaseService {
    private readonly entityManager;
    constructor(entityManager: EntityManager);
    find(target: new () => EntitiesInterface): Promise<EntitiesInterface[]>;
    insert(target: new () => EntitiesInterface, entity: EntitiesInterface): Promise<void>;
    delete(target: new () => EntitiesInterface, uuid: string): Promise<void>;
    update(target: new () => EntitiesInterface, uuid: string, entity: EntitiesInterface): Promise<void>;
}
