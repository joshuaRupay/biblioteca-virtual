import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-carrusel-libros',
  templateUrl: './carrusel-libros.component.html',
  styleUrls: ['./carrusel-libros.component.scss']
})
export class CarruselLibrosComponent implements OnInit {

  opacidad1: string = 'z-30';
  opacidad2: string = 'z-20';
  opacidad3: string = 'z-10';
  color1: string = 'bg-red-400';
  color2: string = 'bg-purple-400';
  color3: string = 'bg-purple-400';


  constructor() { }

  ngOnInit(): void {
    this.funcionIntervalo();
  }

  opcionCarrusel(opcion: number) {
    if (opcion == 0) {
      this.opacidad1 = 'z-30';
      this.opacidad2 = 'z-20';
      this.opacidad3 = 'z-10';
      this.color1 = 'bg-red-400';
      this.color2 = 'bg-purple-400';
      this.color3 = 'bg-purple-400';
    }
    else if (opcion == 1) {
      this.opacidad1 = 'z-10';
      this.opacidad2 = 'z-30';
      this.opacidad3 = 'z-20';
      this.color1 = 'bg-purple-400';
      this.color2 = 'bg-blue-400';
      this.color3 = 'bg-purple-400';
    }
    else {
      this.opacidad1 = 'z-10';
      this.opacidad2 = 'z-20';
      this.opacidad3 = 'z-30';
      this.color1 = 'bg-purple-400';
      this.color2 = 'bg-purple-400';
      this.color3 = 'bg-green-400';
    }
  }


  funcionIntervalo() {
    const numbers = interval(4000);

    const takeFourNumbers = numbers.pipe(take(20));

    takeFourNumbers.subscribe(x => this.opcionCarrusel(x % 3));
  }

}
