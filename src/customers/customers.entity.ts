import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable } from 'typeorm';
import { Order } from '../orders/orders.entity';
import { ApiTags, ApiProperty, ApiOperation } from '@nestjs/swagger';

@ApiTags('Покупатели')
@Entity('customers')//указываем что это не просто клас, а сущность в рамках TypeOrm, в БД будет храниться как таблица
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
