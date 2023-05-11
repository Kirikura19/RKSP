import { Module } from '@nestjs/common';
import { BikesController } from './bikes.controller';
import { BikesService } from './bikes.service';
import { DatasourceModule } from 'src/datasource/datasource.module';


@Module({
  controllers: [BikesController],
  providers: [BikesService],
  imports: [DatasourceModule],
})
export class BikesModule {}
