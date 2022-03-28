import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/ApiService';
import { Libro } from 'src/app/interfaces/Libro';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {
  libro?: Libro = undefined;
  urlPdf: SafeResourceUrl;
  linkPaginaActual: string = '';

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute, public sanitizer: DomSanitizer) { }


  ngOnInit(): void {
    const libro: Libro = {
      id: Number(this.activatedRoute.snapshot.paramMap.get('codigo')),
      nombreAutor: undefined,
      titulo: undefined,
      descripcion: undefined,
      fechaPublicacion: undefined,
      numeroEdicion: undefined,
      urlImagenPortada: undefined,
      urlImagenIndice: undefined,
      urlPdfLibro: undefined
    };
    this.api.obtenerLibro(libro).subscribe(retorno => {
      this.libro = retorno;
      this.urlPdf = this.sanitizer.bypassSecurityTrustResourceUrl(retorno.urlPdfLibro);
      this.linkPaginaActual = '/biblioteca/libro/' + retorno.id + '#contenido';
    });
  }


}