import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = false): string {
    return activar ? '*'.repeat(value.length) : value
    // if (activar) {
    //   let oculto: string = '';
    //   for (let j = 0; j < value.length; j++) {
    //     oculto += '*';
    //   }
    //   value = oculto
    // }
    // return value;
  }

}
