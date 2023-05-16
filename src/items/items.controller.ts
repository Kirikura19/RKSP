import { Controller, Post, Body, Param, Get, Put, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto, UpdateItemDto, PartialItemDto } from './items.dto';
import { Item } from './items.entity';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  createItem(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.createItem(createItemDto);
  }

  @Get()
  getAllItems() {
    return this.itemsService.getAllItems();
  }

  @Get(':id')
  getItemById(@Param('id') id: string) {
    return this.itemsService.getItemById(Number(id));
  }

  @Put(':id')
  updateItem(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.updateItem(Number(id), updateItemDto);
  }

  @Delete(':id')
  deleteItem(@Param('id') id: string) {
    return this.itemsService.deleteItem(Number(id));
  }

  @Get(':id/partial')
  getItemPartialInfo(@Param('id') id: string) {
    return this.itemsService.getItemPartialInfo(Number(id));
  }
}
