import { Pipe, PipeTransform } from '@angular/core';
import { IData } from './../../data';

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  transform(dataSet: IData[], type: string = 'all'): IData[] {
    if (type === 'all') {
      return dataSet;
    }
    if (type === 'weather') {
      return dataSet.sort((a, b) => {
        return a.weather.temperature > b.weather.temperature ?
          -1 : a.weather.temperature < b.weather.temperature ? 1 : 0;
      });
    }
    return dataSet.filter(item => item.type === type);
  }

}
