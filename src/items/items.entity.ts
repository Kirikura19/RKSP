import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Order } from '../orders/orders.entity';

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

  @ManyToOne(() => Order, (order) => order.items)
  order: Order;
}
