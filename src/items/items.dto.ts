import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  @IsString()
  item_name: string;

  @IsNotEmpty()
  @IsNumber()
  item_price: number;

  @IsNotEmpty()
  @IsString()
  color: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsString()
  size: string;
}

export class UpdateItemDto {
  @IsString()
  item_name?: string;

  @IsNumber()
  item_price?: number;

  @IsString()
  color?: string;

  @IsString()
  type?: string;

  @IsString()
  model?: string;

  @IsString()
  size?: string;
}

export class PartialItemDto {
  @IsNumber()
  item_id: number;

  @IsString()
  item_name: string;
}
