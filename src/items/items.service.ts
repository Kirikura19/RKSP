import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './items.entity';
import { CreateItemDto, UpdateItemDto, PartialItemDto } from './items.dto';

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
  async getAllItems(): Promise<Item[]> {
    return this.itemsRepository.find();
  }
  async getItemById(itemId: number): Promise<Item> {
    return this.itemsRepository.findOne({ where: { item_id: itemId } });
  }
  async updateItem(itemId: number, updateItemDto: UpdateItemDto): Promise<Item> {
    const item = await this.getItemById(itemId);
    if (!item) {
      throw new Error('Item not found');
    }
    Object.assign(item, updateItemDto);
    return this.itemsRepository.save(item);
  }

  async deleteItem(itemId: number): Promise<void> {
    await this.itemsRepository.delete(itemId);
  }

  async getItemPartialInfo(itemId: number): Promise<PartialItemDto> {
    const item = await this.getItemById(itemId);
    if (!item) {
      throw new Error('Item not found');
    }
    const { item_id, item_name } = item;
    return { item_id, item_name };
  }
}