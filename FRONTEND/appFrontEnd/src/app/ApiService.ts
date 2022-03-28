import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from 'rxjs/operators';
import { CategoriaLibro } from "./interfaces/CategoriaLibro";
import { Libro } from "./interfaces/Libro";
import { RespuestaCategoriaLibro } from "./interfaces/RespuestaCategoriaLibro";
import { RespuestaLibro } from "./interfaces/RespuestaLibro";
import { RespuestaSubcategoriaLibro } from "./interfaces/RespuestaSubcategoriaLibro";
import { SeccionLibro } from "./interfaces/SeccionLibro";
import { SubcategoriaLibro } from "./interfaces/SubcategoriaLibro";
import { Usuario } from "./interfaces/Usuario";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json;charset=utf-8'
        })
    };
    errorHandl(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } 
        else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }    
        console.log(errorMessage);
        return throwError(errorMessage);
    }
    constructor(private http: HttpClient) { }  
    obtenerMejoresTitulos(): Observable<RespuestaLibro> {
        return this.http.post<RespuestaLibro>('http://127.0.0.1:8080/obtener-mejores-titulos', null, this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
    }

    obtenerUltimosLibros(): Observable<RespuestaLibro> {
        return this.http.post<RespuestaLibro>('http://127.0.0.1:8080/obtener-ultimos-libros', null, this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
    }

    obtenerCategorias(): Observable<RespuestaCategoriaLibro> {
        return this.http.post<RespuestaCategoriaLibro>('http://127.0.0.1:8080/obtener-categorias', null, this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
    }
    obtenerSubcategorias(data:CategoriaLibro): Observable<RespuestaSubcategoriaLibro> {
        return this.http.post<RespuestaSubcategoriaLibro>('http://127.0.0.1:8080/obtener-subcategorias', data, this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
    }
    obtenerLibrosPorSubcategoria(data:SubcategoriaLibro): Observable<RespuestaLibro> {
        return this.http.post<RespuestaLibro>('http://127.0.0.1:8080/obtener-libros-subcategoria', data, this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
    }
    obtenerLibro(data:Libro): Observable<Libro> {
        return this.http.post<Libro>('http://127.0.0.1:8080/obtener-libro', data, this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
    }

    obtenerLibrosFavoritos(data:SeccionLibro): Observable<RespuestaLibro> {
        return this.http.post<RespuestaLibro>('http://127.0.0.1:8080//obtener-libros-favoritos', data, this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
    }
    obtenerLibrosGuardados(data:SeccionLibro): Observable<RespuestaLibro> {
        return this.http.post<RespuestaLibro>('http://127.0.0.1:8080//obtener-libros-guardados', data, this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
    }
    obtenerUsuario(data:Usuario): Observable<Usuario> {
        return this.http.post<Usuario>('http://127.0.0.1:8080/autenticar-usuario', data, this.httpOptions)
          .pipe(
            retry(1),
            catchError(this.errorHandl)
          );
      }

      agregarUsuario(data:Usuario): Observable<Usuario> {
        return this.http.post<Usuario>('http://127.0.0.1:8080/registrar-usuario', data, this.httpOptions)
          .pipe(
            retry(1),
            catchError(this.errorHandl)
          );
      }
}
