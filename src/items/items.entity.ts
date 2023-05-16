import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Order } from '../orders/orders.entity';
import { ApiTags, ApiProperty, ApiOperation } from '@nestjs/swagger';

@Entity('items')
export class Item {
  
  @PrimaryGeneratedColumn()
  item_id: number;
 
  @Column()
  item_name: string;
 
  @Column()
  item_price: number;

  @Column()
  color: string;
  
  @Column()
  type: string;
  
  @Column()
  model: string;

  @Column()
  size: string;

  @ManyToOne(() => Order, (order) => order.items) // с которой => в которую
  @JoinColumn({ name: 'order_id' })
  order: Order; // доступ к Order при работе с Item
}
