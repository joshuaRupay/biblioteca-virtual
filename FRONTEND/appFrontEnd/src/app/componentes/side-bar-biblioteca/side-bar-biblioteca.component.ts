import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/ApiService';
import { CategoriaLibro } from 'src/app/interfaces/CategoriaLibro';
import { Libro } from 'src/app/interfaces/Libro';
import { SubcategoriaLibro } from 'src/app/interfaces/SubcategoriaLibro';

@Component({
  selector: 'app-side-bar-biblioteca',
  templateUrl: './side-bar-biblioteca.component.html',
  styleUrls: ['./side-bar-biblioteca.component.scss']
})
export class SideBarBibliotecaComponent implements OnInit {
  botonClick: boolean = false;
  ancho: string = '20';
  transicion: string = '';
  rotacion: string = '';
  listaCategorias: CategoriaLibro[] = [];
  listaSubcategorias: SubcategoriaLibro[] = [];
  listaLibros: Libro[] = [];
  

  traslacion: string = '52';

  cerrarBarra() {
    if (this.botonClick) {
      this.cambiarAncho();
    }
  }

  desplegarOpcionesLista = [{
    click: false,
    rotacion: '',
    cero: 'py-0 text-cero',
  }, {
    click: false,
    rotacion: '',
    cero: 'py-0 text-cero',
  }, {
    click: false,
    rotacion: '',
    cero: 'py-0 text-cero',
  }];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.obtenerCategorias().subscribe(data => {
      this.listaCategorias = data.lista;
    });

  }


  cambiarAncho() {

    this.transicion = 'duration-700';

    if (!this.botonClick) {
      this.ancho = '64';
      this.rotacion = 'rotate-180';
      this.traslacion = '0';
      this.botonClick = true;
    }
    else {
      this.ancho = '20';
      this.rotacion = '';
      this.botonClick = false;
      this.traslacion = '52';
      if (this.desplegarOpcionesLista[0].click) this.desplegarOpciones(0);
      if (this.desplegarOpcionesLista[1].click) this.desplegarOpciones(1);
      if (this.desplegarOpcionesLista[2].click) this.desplegarOpciones(2);
    }
  }

  desplegarOpciones(indice: number) {
    if (!this.desplegarOpcionesLista[indice].click) {
      this.desplegarOpcionesLista[indice].rotacion = 'rotate-180 transition duration-500';
      this.desplegarOpcionesLista[indice].cero = 'py-2 text-sm duration-200';
      this.desplegarOpcionesLista[indice].click = true;
      
  

    }
    else {
      this.desplegarOpcionesLista[indice].rotacion = '';
      this.desplegarOpcionesLista[indice].cero = 'py-0 text-cero duration-300';
      this.desplegarOpcionesLista[indice].click = false;
    }

  }
  
}
