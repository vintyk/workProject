import {Pipe, PipeTransform} from '@angular/core';

// Custom Pipe
@Pipe({
  name: 'heroFilterPipe',
  // отключенная оптимизация пайпов.
  // Нужна, что бы при изменении поля сразу отображался поиск
  // аккуратно. Большие массивы могут тормозить
  pure: false
})
export class HeroFilterPipe implements PipeTransform {

  transform(heroList, searchStr: string, field: string = 'name') {
    if (heroList.length === 0 || searchStr === '') {
      return heroList;
    }
    return heroList.filter(hero => hero[field].toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
  }
}
