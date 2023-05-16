import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Order } from '../orders/orders.entity';

export class CreateItemDto {
  @ApiProperty({ example: 'Велосипед "Red Death"', description: 'Название' })
  @IsNotEmpty()
  @IsString()
  item_name: string;

  @ApiProperty({ example: '4999', description: 'Цена' })
  @IsNotEmpty()
  @IsNumber()
  item_price: number;

  @ApiProperty({ example: 'Красный', description: 'Цвет' })
  @IsNotEmpty()
  @IsString()
  color: string;

  @ApiProperty({ example: 'Велосипед', description: 'Тип' })
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty({ example: 'Спортивный', description: 'Модель' })
  @IsNotEmpty()
  @IsString()
  model: string;

  @ApiProperty({ example: 'XL', description: 'Размер' })
  @IsNotEmpty()
  @IsString()
  size: string;
}

export class ItemToOrderDto{
  @ApiProperty({ example: '1', description: 'ID товара, который нужно назначить'})
  item_id: number;
  @ApiProperty({ example: '1', description: 'ID заказа в который назначить товар' })
  order_id: number;
}

export class UpdateItemDto {
  @ApiProperty({ example: 'Велосипед "Red Death"', description: 'Название' })
  @IsString()
  item_name: string;

  @ApiProperty({ example: '4999', description: 'Цена' })
  @IsNumber()
  item_price: number;

  @ApiProperty({ example: 'Красный', description: 'Цвет' })
  @IsString()
  color: string;

  @ApiProperty({ example: 'Велосипед', description: 'Тип' })
  @IsString()
  type: string;

  @ApiProperty({ example: 'Спортивный', description: 'Модель' })
  @IsString()
  model: string;

  @ApiProperty({ example: 'XL', description: 'Размер' })
  @IsString()
  size: string;
}

export class PartialItemDto {
  @ApiProperty({ example: '1', description: 'ID' })
  @IsNumber()
  item_id: number;

  @ApiProperty({ example: 'Велосипед "Red Death"', description: 'Название' })
  @IsString()
  item_name: string;

}
