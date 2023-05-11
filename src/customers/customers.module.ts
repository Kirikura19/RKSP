import { Module } from '@nestjs/common';
import { CustomersController } from './cuctomers.controller';
import { CustomersService } from './customers.service';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
  imports: [DatasourceModule],
})
export class CustomersModule {}
