import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/ApiService';
import { CategoriaLibro } from 'src/app/interfaces/CategoriaLibro';
import { Libro } from 'src/app/interfaces/Libro';
import { SubcategoriaLibro } from 'src/app/interfaces/SubcategoriaLibro';

@Component({
  selector: 'app-libros-por-subcategoria',
  templateUrl: './libros-por-subcategoria.component.html',
  styleUrls: ['./libros-por-subcategoria.component.scss']
})
export class LibrosPorSubcategoriaComponent implements OnInit {
  listaLibros: Libro[] = [];
  listaSubcategoria: SubcategoriaLibro;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const subcategoria: SubcategoriaLibro = {
      idSubcategoria: Number(this.activatedRoute.snapshot.paramMap.get('cod')),
      idCategoria: undefined,
      nombreSubcategoria: undefined,
      idLibro: undefined
    };
    this.api.obtenerLibrosPorSubcategoria(subcategoria).subscribe(retorno => {
      this.listaLibros = retorno.lista;
    });



  }



}
