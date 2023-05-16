import { IsNotEmpty, IsString, IsEmail, IsPhoneNumber, IsNumber } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  customer_name: string;

  @IsNotEmpty()
  @IsEmail()
  customer_email: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  customer_phone: string;

  @IsNotEmpty()
  @IsString()
  customer_gender: string;

  @IsNotEmpty()
  customer_age: number;

  @IsNotEmpty()
  @IsString()
  customer_nationality: string;
}

export class UpdateCustomerDto {
  @IsString()
  customer_name?: string;

  @IsEmail()
  customer_email?: string;

  @IsPhoneNumber()
  customer_phone?: string;

  @IsString()
  customer_gender?: string;

  customer_age?: number;

  @IsString()
  customer_nationality?: string;
}

export class PartialCustomerDto {
  @IsNumber()
  customer_id: number;

  @IsString()
  customer_name: string;
}
