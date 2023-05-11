import { BikesService } from './bikes.service';
import { Controller, Get, Param, Put, Delete, Body, Post} from '@nestjs/common';
import { Bike } from './bike.entity';

@Controller('bikes') // Декоратор, который привязывает этот контроллер к URL-адресу /bikes
export class BikesController {
  constructor(private readonly bikesService: BikesService) {} // Инициализация сервиса в конструкторе

  // Обработчик GET-запроса на URL-адрес /bikes для получения всех имеющихся в базе данных велосипедов
  @Get()
  findAll() {
    return this.bikesService.findAll(); // Вызов метода findAll() из bikesService
  }

  // Обработчик GET-запроса на URL-адрес /bikes/:id для получения одного конкретного велосипеда по ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bikesService.findOne(+id); // Вызов метода findOne() из bikesService с преобразованием id в число
  }

  // Обработчик PUT-запроса на URL-адрес /bikes/:id для обновления информации о конкретном велосипеде по ID
  @Put(':id')
  update(@Param('id') id: string, @Body() updateBike: Bike) {
    return this.bikesService.update(+id, updateBike); // Вызов метода update() из bikesService с преобразованием id в число
  }

  // Обработчик POST-запроса на URL-адрес /bikes для создания нового велосипеда в базе данных
  @Post()
  create(@Body() createBike: Bike) {
    return this.bikesService.create(createBike); // Вызов метода create() из bikesService
  }

  // Обработчик DELETE-запроса на URL-адрес /bikes/:id для удаления конкретного велосипеда по ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bikesService.remove(+id); // Вызов метода remove() из bikesService с преобразованием id в число
  }
}