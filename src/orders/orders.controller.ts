import { Controller, Post, Body, Param, Get, Put, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto, UpdateOrderDto, PartialOrderDto } from './orders.dto';
import { Order } from './orders.entity';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Заказы') // Тег для документации
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @ApiOperation({ summary: 'Создание заказа' }) // Операция для Swagger
  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.createOrder(createOrderDto);
  }

  @ApiOperation({ summary: 'Получение всех заказов' }) // Операция для Swagger
  @Get()
  getAllOrders() {
    return this.ordersService.getAllOrders();
  }

  @ApiOperation({ summary: 'Получение заказа по ID' }) // Операция для Swagger
  @Get(':id')
  getOrderById(@Param('id') id: string) {
    return this.ordersService.getOrderById(Number(id));
  }

  @ApiOperation({ summary: 'Обновление заказа по ID' }) // Операция для Swagger
  @Put(':id')
  updateOrder(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.updateOrder(Number(id), updateOrderDto);
  }

  @ApiOperation({ summary: 'Удаление заказа по ID' }) // Операция для Swagger
  @Delete(':id')
  deleteOrder(@Param('id') id: string) {
    return this.ordersService.deleteOrder(Number(id));
  }

  @ApiOperation({ summary: 'Получение частичную инфу заказа по ID' }) // Операция для Swagger
  @Get(':id/partial')
  getOrderPartialInfo(@Param('id') id: string) {
    return this.ordersService.getOrderPartialInfo(Number(id));
  }
}
