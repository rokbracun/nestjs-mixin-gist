import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PersonCreateDto } from './dto/person-create.dto';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.personService.getById(id);
  }

  @Post()
  async create(@Body() person: PersonCreateDto) {
    return this.personService.createPerson(person);
  }
}
