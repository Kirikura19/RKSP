import { Module } from '@nestjs/common';
import { RollersController } from './rollers.controller';
import { RollersService } from './rollers.service';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [RollersController],
  providers: [RollersService],
  imports: [DatasourceModule],
})
export class RollersModule {}
