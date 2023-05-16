import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Customer } from '../customers/customers.entity';
import { Item } from '../items/items.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  order_id: number;

  @Column()
  order_date: string;

  @Column()
  total_price: number;

  @ManyToOne(() => Customer, (customer) => customer.orders)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @OneToMany(() => Item, (item) => item.order)
  items: Item[];
}
