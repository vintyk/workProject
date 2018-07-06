import {Pipe, PipeTransform} from '@angular/core';

// Custom Pipe
@Pipe({
  name: 'appPow'
})
export class PowPipe implements PipeTransform {
  // первый параметр - что приходит val
  // Что-то должен вернуть.
  // transform(val: any, powNumber: number = 1, symb?: string): any {
  //   return symb + (Math.pow(val, powNumber));
  // }
  transform(value: any, powNumber: number = 1): any {
    return (Math.pow(value, powNumber));
  }
}
