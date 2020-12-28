import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitan América';
  nombre2: string = 'eL CAakKaSHhh';
  arreglo = [1,3,5,9,6,8,2];
  title = 'pipes';
  PI: number = Math.PI;
  porcentaje: number = 0.236;
  salario: number = 1234.5;
  fecha: Date= new Date()

  activar: boolean = true;

  idioma: string = 'es'
  videoURL = "https://www.youtube.com/embed/4tX3Xh1i0A8"
 
  valorPromesa = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('llegó la información')
    }, 3500)
  })

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Calle',
      casa: 'EquisDe'
    }
  }

  cambiarIdioma (idioma: string) {
    this.idioma = idioma
  }
}
