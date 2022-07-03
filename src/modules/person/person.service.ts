import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarRepository } from '../car/car.repository';
import { PersonCreateDto } from './dto/person-create.dto';
import { PersonRepository } from './person.repository';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(PersonRepository)
    private readonly personRepository: PersonRepository,
    @InjectRepository(CarRepository)
    private readonly carRepository: CarRepository,
  ) {}

  async getById(id: number) {
    return this.personRepository.getById(id, ['car']);
  }

  async createPerson(person: PersonCreateDto) {
    const car = await this.carRepository.save(
      this.carRepository.create({ name: person.carName }),
    );

    const savedPerson = await this.personRepository.save(
      this.personRepository.create(person),
    );

    savedPerson.car = car;

    return this.personRepository.save(savedPerson);
  }
}
