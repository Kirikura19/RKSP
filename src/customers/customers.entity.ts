import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from '../orders/orders.entity';
import { ApiTags, ApiProperty } from '@nestjs/swagger';

@Entity('customers')//указываем что это не просто клас, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Customer {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  customer_id: number;

  @ApiProperty({ example: 'Иванов Иван Иванович', description: 'ФИО' })
  @Column()
  customer_name: string;

  @ApiProperty({ example: 'ivavava@ya.ru', description: 'Почта' })
  @Column()
  customer_email: string;

  @ApiProperty({ example: '89153333333', description: 'Телефон' })
  @Column()
  customer_phone: string;

  @ApiProperty({ example: 'М', description: 'Пол' })
  @Column()
  customer_gender: string;

  @ApiProperty({ example: '17', description: 'Возраст' })
  @Column()
  customer_age: number;

  @ApiProperty({ example: 'РФ', description: 'Гражданство' })
  @Column()
  customer_nationality: string;

  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[];
}
