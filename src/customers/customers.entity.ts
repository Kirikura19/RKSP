import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from '../orders/orders.entity';

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn()
  customer_id: number;

  @Column()
  customer_name: string;

  @Column()
  customer_email: string;

  @Column()
  customer_phone: string;

  @Column()
  customer_gender: string;

  @Column()
  customer_age: number;

  @Column()
  customer_nationality: string;

  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[];
}
