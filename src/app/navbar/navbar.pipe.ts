import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'navbar',
})
export class NavbarPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
