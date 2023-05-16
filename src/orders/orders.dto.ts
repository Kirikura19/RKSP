import { IsNotEmpty, IsNumber, IsDate } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsDate()
  order_date: Date;

  @IsNotEmpty()
  @IsNumber()
  total_price: number;
}

export class UpdateOrderDto {
  @IsDate()
  order_date?: Date;

  @IsNumber()
  total_price?: number;
}

export class PartialOrderDto {
  @IsNumber()
  order_id: number;

  @IsDate()
  order_date: Date;
}
