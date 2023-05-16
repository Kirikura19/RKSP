import { IsNotEmpty, IsNumber, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Customer } from '../customers/customers.entity';
import { Item } from '../items/items.entity';

export class CreateOrderDto {
  @ApiProperty({ example: '1999.12.29', description: 'Дата рождения' })
  @IsNotEmpty()
  order_date: string;

  @ApiProperty({ example: '2199', description: 'Цена' })
  @IsNotEmpty()
  @IsNumber()
  total_price: number;

  @ApiProperty ({ example: '1', description: 'ID Customer' })
  @IsNumber()
  @IsNotEmpty()
  customerId: number;

}

export class UpdateOrderDto {
  @ApiProperty({ example: '1999.12.29', description: 'Дата рождения' })
  @IsDate()
  order_date?: string;
  @ApiProperty({ example: '2199', description: 'Цена' })
  @IsNumber()
  total_price?: number;
}

export class PartialOrderDto {
  @ApiProperty({ example: '1', description: 'ID' })
  @IsNumber()
  order_id: number;

  @ApiProperty({ example: '1999.12.29', description: 'Дата рождения' })
  @IsDate()
  order_date: string;
}
