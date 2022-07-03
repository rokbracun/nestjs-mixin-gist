import { Controller, Get, Param } from '@nestjs/common';
import { CarService } from './car.service';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.carService.getById(id);
  }
}
