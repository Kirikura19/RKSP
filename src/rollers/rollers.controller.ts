import { RollersService } from './rollers.service';
import { Controller, Get, Param, Put, Delete, Body, Post} from '@nestjs/common';
import { Roller } from './roller.entity';

@Controller('rollers')
export class RollersController 
{
  constructor(private readonly rollersService: RollersService) {}

  @Get()
  findAll() {
    return this.rollersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rollersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRoller: Roller) {
    return this.rollersService.update(+id, updateRoller);
  }

  @Post()
  create(@Body() createRoller: Roller) {
    return this.rollersService.create(createRoller);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rollersService.remove(+id);
  }
}
