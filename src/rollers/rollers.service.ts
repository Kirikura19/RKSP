import { Injectable } from '@nestjs/common';
import { DatasourceService } from '../datasource/datasource.service';
import { Roller } from './roller.entity';
import { HttpStatus } from '@nestjs/common';


@Injectable()
export class RollersService 
{
    constructor(private readonly datasourceService: DatasourceService) {}
    
    create(roller: Roller) {
        this.datasourceService.getRollers().push(roller);
        return roller;
    }

    findOne(id: number) {
        return this.datasourceService
          .getRollers()
          .find((roller) => roller.id === id);
    }
    
    findAll(): Roller[] {
        return this.datasourceService.getRollers();
    }

    update(id: number, updateRoller: Roller) {
        const index = this.datasourceService
          .getRollers()
          .findIndex((roller) => roller.id === id);
        this.datasourceService.getRollers()[index] = updateRoller;
        return this.datasourceService.getRollers()[index];
      }
    
    remove(id: number) {
    const index = this.datasourceService
      .getRollers()
      .findIndex((roller) => roller.id === id);
    this.datasourceService.getRollers().splice(index, 1);
    return HttpStatus.OK;
    }


}
