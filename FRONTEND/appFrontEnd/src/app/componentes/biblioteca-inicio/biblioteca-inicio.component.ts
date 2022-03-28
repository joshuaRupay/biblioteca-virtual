import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/ApiService';
import { Libro } from 'src/app/interfaces/Libro';

@Component({
  selector: 'app-biblioteca-inicio',
  templateUrl: './biblioteca-inicio.component.html',
  styleUrls: ['./biblioteca-inicio.component.scss']
})
export class BibliotecaInicioComponent implements OnInit {
  listaPrimerosLibros: Libro[] = [];
  listaUltimosLibros: Libro[] = [];
  libro1?: Libro = undefined;
  libro2?: Libro = undefined;
  libro3?: Libro = undefined;
  libro4?: Libro = undefined;
  libro5?: Libro = undefined;
  libro6?: Libro = undefined;
  indice: number = -1;
  constructor(private api: ApiService) { }


  ngOnInit(): void {
    this.api.obtenerMejoresTitulos().subscribe( data => {
      this.listaPrimerosLibros = data.lista;
    });
    this.api.obtenerUltimosLibros().subscribe( data => {
      this.listaUltimosLibros = data.lista;
      this.libro1 = this.listaUltimosLibros[0];
      this.libro2 = this.listaUltimosLibros[1];
      this.libro3 = this.listaUltimosLibros[2];
      this.libro4 = this.listaUltimosLibros[3];
      this.libro5 = this.listaUltimosLibros[4];
      this.libro6 = this.listaUltimosLibros[5];
    });
  }

}
