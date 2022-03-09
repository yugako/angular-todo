import { Pipe, PipeTransform } from '@angular/core';
import { convertSentenceToCamelCase } from '~utils';

@Pipe({
  name: 'camelcase',
})
export class CamelCasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    return convertSentenceToCamelCase(value);
  }
}
