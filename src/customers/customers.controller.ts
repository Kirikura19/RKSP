import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './customers.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.createCustomer(createCustomerDto);
  }

  @Get(':id')
  getCustomerById(@Param('id') id: string) {
    return this.customersService.getCustomerById(Number(id));
  }
}
