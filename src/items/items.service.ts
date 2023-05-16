import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './items.entity';
import { CreateItemDto, UpdateItemDto, PartialItemDto, ItemToOrderDto } from './items.dto';
import { Order } from '../orders/orders.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemsRepository: Repository<Item>,
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>
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
    Object.assign(item, updateItemDto);
    return this.itemsRepository.save(item);
  }
  async deleteItem(itemId: number): Promise<void> {
    await this.itemsRepository.delete(itemId);
  }

  /*
  Ключевое слово await используется, чтобы ожидать разрешения Promise,
  возвращаемого методом getItemById из этого же сервиса. Мы передаем itemId 
  в getItemById, чтобы получить соответствующий товар. await приостанавливает 
  выполнение функции до тех пор, пока Promise не разрешится, и сохраняет результат
  в переменную item. */

  async getItemPartialInfo(itemId: number): Promise<PartialItemDto> {
    const item = await this.getItemById(itemId);
    const { item_id, item_name } = item;
    return { item_id, item_name };
  }




  async assignItemToOrder(itemToOrderDto: ItemToOrderDto): Promise<void> {
    const { item_id, order_id } = itemToOrderDto;
  
    // Получение сущностей Order и Item по их идентификаторам
    const order = await this.ordersRepository.findOne({ where: { order_id: order_id } });
    const item = await this.itemsRepository.findOne({ where: { item_id: item_id } });
    // Присвоение Item к Order
    item.order = order;
    await this.itemsRepository.save(item);
  }
}