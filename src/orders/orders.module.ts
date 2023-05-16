import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { Order } from './orders.entity';
import { Item } from '../items/items.entity';
import { Customer } from '../customers/customers.entity';



@Module({
  imports: [TypeOrmModule.forFeature([Order, Item, Customer])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
