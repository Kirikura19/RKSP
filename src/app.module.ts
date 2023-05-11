import { Module } from '@nestjs/common';
import { BikesModule } from './bikes/bikes.module';
import { RollersModule } from './rollers/rollers.module';
import { CustomersModule } from './customers/customers.module';
import { DatasourceModule } from './datasource/datasource.module';

@Module({
  imports: [BikesModule, RollersModule, CustomersModule, DatasourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
