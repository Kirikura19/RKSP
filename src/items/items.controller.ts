import { Controller, Post, Body, Param, Get, Put, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto, UpdateItemDto, PartialItemDto, ItemToOrderDto } from './items.dto';
import { Item } from './items.entity';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Товары') // Тег для документации
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @ApiOperation({ summary: 'Создание предмета' }) // Операция для Swagger
  @Post()
  createItem(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.createItem(createItemDto);
  }

  @ApiOperation({ summary: 'Получение всех предметов' }) // Операция для Swagger
  @Get()
  getAllItems() {
    return this.itemsService.getAllItems();
  }

  @ApiOperation({ summary: 'Получение премета по ID' }) // Операция для Swagger
  @Get(':id')
  getItemById(@Param('id') id: string) {
    return this.itemsService.getItemById(Number(id));
  }

  @ApiOperation({ summary: 'Обновление предмета по ID' }) // Операция для Swagger
  @Put(':id')
  updateItem(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.updateItem(Number(id), updateItemDto);
  }

  @ApiOperation({ summary: 'Удаление предмета по ID' }) // Операция для Swagger
  @Delete(':id')
  deleteItem(@Param('id') id: string) {
    return this.itemsService.deleteItem(Number(id));
  }

  @ApiOperation({ summary: 'Получение частичную инфу предмета по ID' }) // Операция для Swagger
  @Get(':id/partial')
  getItemPartialInfo(@Param('id') id: string) {
    return this.itemsService.getItemPartialInfo(Number(id));
  }
  @ApiOperation({ summary: 'Присвоение товара к заказу' })
  @Post('assign-to-order')
  assignItemToOrder(@Body() itemToOrderDto: ItemToOrderDto): Promise<void> {
    return this.itemsService.assignItemToOrder(itemToOrderDto);
  }
}
