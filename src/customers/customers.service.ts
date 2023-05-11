import { Injectable } from '@nestjs/common';
import { DatasourceService } from '../datasource/datasource.service';
import { Customer } from './customer.entity';
import { HttpStatus } from '@nestjs/common';


@Injectable()
export class CustomersService 
{
    constructor(private readonly datasourceService: DatasourceService) {}
    
    create(customer: Customer) {
        this.datasourceService.getCustomers().push(customer);
        return customer;
    }

    findOne(id: number) {
        return this.datasourceService
          .getCustomers()
          .find((customer) => customer.id === id);
    }
    
    findAll(): Customer[] {
        return this.datasourceService.getCustomers();
    }

    update(id: number, updatedCustomer: Customer) {
        const index = this.datasourceService
          .getCustomers()
          .findIndex((customer) => customer.id === id);
        this.datasourceService.getCustomers()[index] = updatedCustomer;
        return this.datasourceService.getCustomers()[index];
      }
    
    remove(id: number) {
    const index = this.datasourceService
      .getCustomers()
      .findIndex((customer) => customer.id === id);
    this.datasourceService.getCustomers().splice(index, 1);
    return HttpStatus.OK;
    }


}
