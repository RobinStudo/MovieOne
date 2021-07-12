import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dot'
})
export class DotPipe implements PipeTransform {

  transform(value: string): string {
    return value + '.';
  }

}
