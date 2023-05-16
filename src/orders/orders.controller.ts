import { Controller, Post, Body, Param, Get, Put, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto, UpdateOrderDto, PartialOrderDto } from './orders.dto';
import { Order } from './orders.entity';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.createOrder(createOrderDto);
  }

  @Get()
  getAllOrders() {
    return this.ordersService.getAllOrders();
  }

  @Get(':id')
  getOrderById(@Param('id') id: string) {
    return this.ordersService.getOrderById(Number(id));
  }

  @Put(':id')
  updateOrder(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.updateOrder(Number(id), updateOrderDto);
  }

  @Delete(':id')
  deleteOrder(@Param('id') id: string) {
    return this.ordersService.deleteOrder(Number(id));
  }

  @Get(':id/partial')
  getOrderPartialInfo(@Param('id') id: string) {
    return this.ordersService.getOrderPartialInfo(Number(id));
  }
}
