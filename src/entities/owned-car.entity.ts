import { Type } from '@nestjs/common';
import { JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Car } from './car.entity';

/**
 * Example of a mixin used to add common relations to entites.
 */

export interface IOwnedCar {
  car: Car;
}

export function OwnedCar(inverseSideLabel: string): Type<IOwnedCar> {
  class OwnedCarHost extends BaseEntity {
    @OneToOne('Car', inverseSideLabel, { nullable: true })
    @JoinColumn({ name: 'carId', referencedColumnName: 'id' })
    car: Car;
  }

  return OwnedCarHost;
}
