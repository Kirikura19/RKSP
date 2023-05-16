import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Customer } from '../customers/customers.entity';
import { Item } from '../items/items.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  order_id: number;

  @Column()
  order_date: Date;

  @Column()
  total_price: number;

  @ManyToOne(() => Customer, (customer) => customer.orders)
  customer: Customer;

  @OneToMany(() => Item, (item) => item.order)
  items: Item[];
}
