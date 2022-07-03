import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarRepository } from './car.repository';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(CarRepository)
    private readonly carRepository: CarRepository,
  ) {}

  async getById(id: number) {
    return this.carRepository.findOne(id);
  }
}
