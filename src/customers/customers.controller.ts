import { Controller, Post, Body, Param, Get, Put, Delete } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto, UpdateCustomerDto, PartialCustomerDto } from './customers.dto';
import { Customer } from './customers.entity';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Покупатели') // Тег для документации
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @ApiOperation({ summary: 'Создание покупателя' }) // Операция для Swagger
  @Post()
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.createCustomer(createCustomerDto);
  }

  @ApiOperation({ summary: 'Получение всех покупателей' }) // Операция для Swagger
  @Get()
  getAllCustomers() {
    return this.customersService.getAllCustomers();
  }

  @ApiOperation({ summary: 'Получение покупателя по ID' }) // Операция для Swagger
  @Get(':id')
  getCustomerById(@Param('id') id: string) {
    return this.customersService.getCustomerById(Number(id));
  }

  @ApiOperation({ summary: 'Обновление покупателя по ID' }) // Операция для Swagger
  @Put(':id')
  updateCustomer(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customersService.updateCustomer(Number(id), updateCustomerDto);
  }

  @ApiOperation({ summary: 'Удаление покупателя по ID' }) // Операция для Swagger
  @Delete(':id')
  deleteCustomer(@Param('id') id: string) {
    return this.customersService.deleteCustomer(Number(id));
  }

  @ApiOperation({ summary: 'Получение частичную инфу покупателя по ID' }) // Операция для Swagger
  @Get(':id/partial')
  getCustomerPartialInfo(@Param('id') id: string) {
    return this.customersService.getCustomerPartialInfo(Number(id));
  }
}
