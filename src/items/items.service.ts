import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './items.entity';
import { CreateItemDto } from './items.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemsRepository: Repository<Item>,
  ) {}

  async createItem(createItemDto: CreateItemDto): Promise<Item> {
    const item = this.itemsRepository.create(createItemDto);
    return this.itemsRepository.save(item);
  }

  async getItemById(itemId: number): Promise<Item> {
    return this.itemsRepository.findOne({ where: { item_id: itemId } });
  }
}
