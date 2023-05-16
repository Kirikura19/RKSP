import { IsNotEmpty, IsString, IsEmail, IsPhoneNumber, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Order } from '../orders/orders.entity';

export class CreateCustomerDto {
  @ApiProperty({ example: 'Иванов Иван Иванович', description: 'ФИО' })
  @IsNotEmpty()
  @IsString()
  customer_name: string;

  @ApiProperty({ example: 'ivavava@ya.ru', description: 'Почта' })
  @IsNotEmpty()
  @IsEmail()
  customer_email: string;

  @ApiProperty({ example: '89153333333', description: 'Телефон' })
  @IsNotEmpty()
  @IsPhoneNumber()
  customer_phone: string;

  @ApiProperty({ example: 'М', description: 'Пол' })
  @IsNotEmpty()
  @IsString()
  customer_gender: string;

  @ApiProperty({ example: '17', description: 'Возраст' })
  @IsNotEmpty()
  customer_age: number;

  @ApiProperty({ example: 'РФ', description: 'Гражданство' })
  @IsNotEmpty()
  @IsString()
  customer_nationality: string;

}

export class UpdateCustomerDto {
  @ApiProperty({ example: 'Иванов Иван Иванович', description: 'ФИО' })
  @IsString()
  customer_name?: string;

  @ApiProperty({ example: 'ivavava@ya.ru', description: 'Почта' })
  @IsEmail()
  customer_email?: string;

  @ApiProperty({ example: '89153333333', description: 'Телефон' })
  @IsPhoneNumber()
  customer_phone?: string;

  @ApiProperty({ example: 'М', description: 'Пол' })
  @IsString()
  customer_gender?: string;

  @ApiProperty({ example: '17', description: 'Возраст' })
  customer_age?: number;

  @ApiProperty({ example: 'РФ', description: 'Гражданство' })
  @IsString()
  customer_nationality?: string;
}

export class PartialCustomerDto {
  @ApiProperty({ example: '89153333333', description: 'Телефон' })
  @IsNumber()
  customer_id: number;

  @ApiProperty({ example: 'Иванов Иван Иванович', description: 'ФИО' })
  @IsString()
  customer_name: string;
}
