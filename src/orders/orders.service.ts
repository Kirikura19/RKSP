import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './orders.entity';
import { Customer } from '../customers/customers.entity';
import { CreateOrderDto, UpdateOrderDto, PartialOrderDto } from './orders.dto';


@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,
    @InjectRepository(Customer)
    private readonly customersRepository: Repository<Customer>,
  ) {}




  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {

    const { customerId, ...orderData } = createOrderDto;
    // Загрузка клиента из базы данных
    const customer = await this.customersRepository.findOne({ where: { customer_id: customerId } });
    // Создание нового заказа и привязка к клиенту
    const order = this.ordersRepository.create({ ...orderData, customer });
    return this.ordersRepository.save(order);
  }
  async getAllOrders(): Promise<Order[]> {
    return this.ordersRepository.find();
  }
  async getOrderById(orderId: number): Promise<Order> {
    return this.ordersRepository.findOne({ where: { order_id: orderId } });
  }
  async updateOrder(orderId: number, updateOrderDto: UpdateOrderDto): Promise<Order> {
    const order = await this.getOrderById(orderId);
    Object.assign(order, updateOrderDto);
    return this.ordersRepository.save(order);
  }

  async deleteOrder(orderId: number): Promise<void> {
    await this.ordersRepository.delete(orderId);
  }

  async getOrderPartialInfo(orderId: number): Promise<PartialOrderDto> {
    const order = await this.getOrderById(orderId);
    const { order_id, order_date } = order;
    return { order_id, order_date };
  }
}