import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customers.entity';
import { CreateCustomerDto, UpdateCustomerDto, PartialCustomerDto } from './customers.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) {}

  async createCustomer(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const customer = this.customersRepository.create(createCustomerDto);
    return this.customersRepository.save(customer);
  }
  async getAllCustomers(): Promise<Customer[]> {
    return this.customersRepository.find();
  }
  async getCustomerById(customerId: number): Promise<Customer> {
    return this.customersRepository.findOne({ where: { customer_id: customerId } });
  }
  async updateCustomer(customerId: number, updateCustomerDto: UpdateCustomerDto): Promise<Customer> {
    const customer = await this.getCustomerById(customerId);
    if (!customer) {
      throw new Error('Customer not found');
    }
    Object.assign(customer, updateCustomerDto);
    return this.customersRepository.save(customer);
  }

  async deleteCustomer(customerId: number): Promise<void> {
    await this.customersRepository.delete(customerId);
  }

  async getCustomerPartialInfo(customerId: number): Promise<PartialCustomerDto> {
    const customer = await this.getCustomerById(customerId);
    if (!customer) {
      throw new Error('Customer not found');
    }
    const { customer_id, customer_name } = customer;
    return { customer_id, customer_name };
  }
}

