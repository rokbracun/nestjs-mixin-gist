import { Column, Entity } from 'typeorm';
import { OwnedCar } from './owned-car.entity';

/**
 * Example of an entity using a mixin to add a common relation.
 */
@Entity()
export class Person extends OwnedCar('person') {
  @Column()
  name: string;

  @Column()
  surname: string;
}
