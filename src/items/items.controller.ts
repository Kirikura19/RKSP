import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './items.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  createItem(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.createItem(createItemDto);
  }

  @Get(':id')
  getItemById(@Param('id') id: string) {
    return this.itemsService.getItemById(Number(id));
  }
}
