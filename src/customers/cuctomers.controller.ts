import { CustomersService } from './customers.service';
import { Controller, Get, Param, Put, Delete, Body, Post} from '@nestjs/common';
import { Customer } from './customer.entity';

@Controller('customers')
export class CustomersController 
{
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCustomer: Customer) {
    return this.customersService.update(+id, updateCustomer);
  }

  @Post()
  create(@Body() createCustomer: Customer) {
    return this.customersService.create(createCustomer);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(+id);
  }
}
