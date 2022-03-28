import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostInicioComponent } from './componentes/post-inicio/post-inicio.component';
import { NavBarPostInicioComponent } from './componentes/nav-bar-post-inicio/nav-bar-post-inicio.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NavBarInicioComponent } from './componentes/nav-bar-inicio/nav-bar-inicio.component';
import { SideBarPostInicioComponent } from './componentes/side-bar-post-inicio/side-bar-post-inicio.component';
import { SeccionMisLibrosComponent } from './componentes/seccion-mis-libros/seccion-mis-libros.component';
import { LibroComponent } from './componentes/libro/libro.component';
import { BibliotecaComponent } from './componentes/biblioteca/biblioteca.component';
import { PostInicioBienvenidaComponent } from './componentes/post-inicio-bienvenida/post-inicio-bienvenida.component';
import { NavBarBibliotecaComponent } from './componentes/nav-bar-biblioteca/nav-bar-biblioteca.component';
import { SideBarBibliotecaComponent } from './componentes/side-bar-biblioteca/side-bar-biblioteca.component';
import { LoginModalComponent } from './componentes/login-modal/login-modal.component';
import { RegisterModalComponent } from './componentes/register-modal/register-modal.component';
import { BibliotecaInicioComponent } from './componentes/biblioteca-inicio/biblioteca-inicio.component';
import { LibrosPorSubcategoriaComponent } from './componentes/libros-por-subcategoria/libros-por-subcategoria.component';
import { StoreModule } from '@ngrx/store';
import { sesionUsuarioReducer } from './reducer';
import { CarruselLibrosComponent } from './componentes/carrusel-libros/carrusel-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    PostInicioComponent,
    NavBarPostInicioComponent,
    InicioComponent,
    NavBarInicioComponent,
    SideBarPostInicioComponent,
    SeccionMisLibrosComponent,
    LibroComponent,
    BibliotecaComponent,
    PostInicioBienvenidaComponent,
    NavBarBibliotecaComponent,
    SideBarBibliotecaComponent,
    LoginModalComponent,
    RegisterModalComponent,
    BibliotecaInicioComponent,
    LibrosPorSubcategoriaComponent,
    CarruselLibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({sesionUsuario: sesionUsuarioReducer})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
