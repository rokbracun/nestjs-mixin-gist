import { Type } from '@nestjs/common';
import { EntityRepository, ObjectType, Repository } from 'typeorm';

/**
 * Example of a repository mixin used to implement common methods.
 */

export interface IBaseRepository<T> extends Repository<T> {
  getById(id: number, relations: string[]): Promise<T | undefined>;
}

export function BaseRepository<T>(
  entity: ObjectType<T>,
): Type<IBaseRepository<T>> {
  @EntityRepository(entity)
  class BaseRepositoryHost extends Repository<T> implements IBaseRepository<T> {
    async getById(id: number, relations: string[]): Promise<T | undefined> {
      return this.findOne(id, { relations });
    }
  }

  return BaseRepositoryHost;
}
