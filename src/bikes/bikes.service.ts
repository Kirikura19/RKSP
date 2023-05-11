import { Injectable } from '@nestjs/common';
import { DatasourceService } from '../datasource/datasource.service';
import { Bike } from './bike.entity';
import { HttpStatus } from '@nestjs/common';

@Injectable()
export class BikesService {
    constructor(private readonly datasourceService: DatasourceService) {}

    // Метод create создает новый экземпляр велосипеда в хранилище данных (DatasourceService) и возвращает его
    create(bike: Bike) {
        // Метод getBikes() возвращает массив существующих велосипедов
        // Поэтому используется метод push для добавления нового велосипеда в массив
        this.datasourceService.getBikes().push(bike);
        return bike;
    }

    // Метод findOne находит велосипед по его уникальному идентификатору (id)
    // Используется метод find для нахождения велосипеда с определенным id в массиве велосипедов
    findOne(id: number) {
        return this.datasourceService
            .getBikes()
            .find((bike) => bike.id === id);
    }

    // Метод findAll возвращает все велосипеды из хранилища данных (DatasourceService)
    findAll(): Bike[] {
        return this.datasourceService.getBikes();
    }

    // Метод update обновляет информацию о существующем велосипеде по его id
    // Используется метод findIndex для нахождения велосипеда с определенным id в массиве велосипедов
    update(id: number, updatedBike: Bike) {
        const index = this.datasourceService
            .getBikes()
            .findIndex((bike) => bike.id === id);
        // Замена старых данных велосипеда на обновленные
        this.datasourceService.getBikes()[index] = updatedBike;
        return this.datasourceService.getBikes()[index];
    }

    // Метод remove удаляет велосипед из хранилища данных (DatasourceService) по его id
    // Используется метод findIndex для нахождения велосипеда с определенным id в массиве велосипедов
    remove(id: number) {
        const index = this.datasourceService
            .getBikes()
            .findIndex((bike) => bike.id === id);
        // Удаление велосипеда из массива велосипедов
        this.datasourceService.getBikes().splice(index, 1);
        // Возвращение статуса OK
        return HttpStatus.OK;
    }
}