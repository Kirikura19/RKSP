import { Controller, Post, Body, Param, Get, Put, Delete } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto, UpdateCustomerDto, PartialCustomerDto } from './customers.dto';
import { Customer } from './customers.entity';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.createCustomer(createCustomerDto);
  }

  @Get()
  getAllCustomers() {
    return this.customersService.getAllCustomers();
  }

  @Get(':id')
  getCustomerById(@Param('id') id: string) {
    return this.customersService.getCustomerById(Number(id));
  }

  @Put(':id')
  updateCustomer(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customersService.updateCustomer(Number(id), updateCustomerDto);
  }

  @Delete(':id')
  deleteCustomer(@Param('id') id: string) {
    return this.customersService.deleteCustomer(Number(id));
  }

  @Get(':id/partial')
  getCustomerPartialInfo(@Param('id') id: string) {
    return this.customersService.getCustomerPartialInfo(Number(id));
  }
}
