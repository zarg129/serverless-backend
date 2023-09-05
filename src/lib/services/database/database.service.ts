import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { EntitiesInterface } from './entities/interfaces/interfaces';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectEntityManager() private readonly entityManager: EntityManager,
  ) {}

  async find(
    target: new () => EntitiesInterface,
  ): Promise<EntitiesInterface[]> {
    try {
      const entity = await this.entityManager.find<EntitiesInterface>(target);

      if (!entity.length) return null;

      return entity;
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }

  async insert(
    target: new () => EntitiesInterface,
    entity: EntitiesInterface,
  ): Promise<void> {
    try {
      await this.entityManager.insert<EntitiesInterface>(target, entity);
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }

  async delete(
    target: new () => EntitiesInterface,
    uuid: string,
  ): Promise<void> {
    try {
      console.log(target, uuid);
      await this.entityManager.delete<EntitiesInterface>(target, {
        uuid: uuid,
      });
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }

  async update(
    target: new () => EntitiesInterface,
    uuid: string,
    entity: EntitiesInterface,
  ): Promise<void> {
    try {
      await this.entityManager.update<EntitiesInterface>(
        target,
        { uuid: uuid },
        entity,
      );
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }
}
