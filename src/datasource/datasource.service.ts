import { Injectable } from '@nestjs/common';
import { Bike } from 'src/bikes/bike.entity';
import { Customer } from 'src/customers/customer.entity';
import { Roller } from 'src/rollers/roller.entity';

@Injectable()
export class DatasourceService {

  private bikes: Bike[] = [];
  private customers: Customer[] = [];
  private rollers: Roller[] = [];

  getBikes(): Bike[] {
    return this.bikes;
  }
  getCustomers(): Customer[] {
    return this.customers;
  }
  getRollers(): Roller[] {
    return this.rollers;
  }
}
