import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { Order } from '../orders/orders.entity';
import { Item } from './items.entity';
import { Customer } from '../customers/customers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Item, Customer])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
