import { EntityRepository, Repository } from 'typeorm';
import { Car } from '../../entities/car.entity';

@EntityRepository(Car)
export class CarRepository extends Repository<Car> {}
