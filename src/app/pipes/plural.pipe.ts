import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plural'
})
export class PluralPipe implements PipeTransform {

  transform(Keyword: string, count: number): string {
    let pluralKey: string;
    if (count === 0) {
      pluralKey = 'ZERO';
    } else if (count === 1) {
      pluralKey = 'SINGULAR';
    } else if (count === 2) {
      pluralKey = 'DUAL';
    } else if (count >= 3 && count <= 9) {
      pluralKey = 'BETWEEN_THREE_NINE';
    } else if (count === 10) {
      pluralKey = 'TEN';
    } else {
      pluralKey = 'MORE_THAN_TEN';
    }

    return `PLURAL.${Keyword}.${pluralKey}`;
  }

}
