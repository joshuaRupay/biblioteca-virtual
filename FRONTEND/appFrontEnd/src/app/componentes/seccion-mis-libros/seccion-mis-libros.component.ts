import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/ApiService';
import { Libro } from 'src/app/interfaces/Libro';
import { SeccionLibro } from 'src/app/interfaces/SeccionLibro';

@Component({
  selector: 'app-seccion-mis-libros',
  templateUrl: './seccion-mis-libros.component.html',
  styleUrls: ['./seccion-mis-libros.component.scss']
})
export class SeccionMisLibrosComponent implements OnInit {
  listaGuardados: Libro[] = [];
  listaFavoritos: Libro[] = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    const seccionLibro1: SeccionLibro = {
      tipo: 'G',
      idLibro: undefined,
      idUsuario: 1,
      
    };
    const seccionLibro2: SeccionLibro = {
      tipo: 'F',
      idLibro: undefined,
      idUsuario: 1,
      
    };
    this.api.obtenerLibrosGuardados(seccionLibro1).subscribe(retorno => {
      this.listaGuardados = retorno.lista;
    });
    this.api.obtenerLibrosFavoritos(seccionLibro2).subscribe(retorno => {
      this.listaFavoritos = retorno.lista;
    });
  }

}
