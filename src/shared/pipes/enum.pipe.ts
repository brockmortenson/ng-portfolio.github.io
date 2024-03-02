import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enum'
})
export class EnumPipe implements PipeTransform {

  transform(value: any, string: any): any {
    if (string === 'keys') {
      const keys = Object.keys(value);
      return keys.slice(keys.length / 2);
    }

    if (string === 'values') {
      const values = Object.values(value);
      return values.slice(values.length / 2);
    }
  }

}
