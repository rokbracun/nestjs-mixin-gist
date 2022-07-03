import { EntityRepository } from 'typeorm';
import { BaseRepository } from '../../common/base.repository';
import { Person } from '../../entities/person.entity';

/**
 * Example of an EntityRepository using a mixin to get access to common methods.
 */
@EntityRepository(Person)
export class PersonRepository extends BaseRepository(Person) {}
