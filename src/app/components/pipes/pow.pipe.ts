import {Pipe, PipeTransform} from '@angular/core';

// Custom Pipe
@Pipe({
  name: 'appPow'
})
export class PowPipe implements PipeTransform {
  // первый параметр - что приходит value
  // Что-то должен вернуть.
  // transform(value: any, powNumber: number = 1, symb?: string): any {
  //   return symb + (Math.pow(value, powNumber));
  // }
  transform(value: any, powNumber: number = 1): any {
    return (Math.pow(value, powNumber));
  }
}
