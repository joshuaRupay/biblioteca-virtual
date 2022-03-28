import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliotecaComponent } from './componentes/biblioteca/biblioteca.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginModalComponent } from './componentes/login-modal/login-modal.component';
import { PostInicioComponent } from './componentes/post-inicio/post-inicio.component';
import { SeccionMisLibrosComponent } from './componentes/seccion-mis-libros/seccion-mis-libros.component';
import { PostInicioBienvenidaComponent } from './componentes/post-inicio-bienvenida/post-inicio-bienvenida.component';
import { BibliotecaInicioComponent } from './componentes/biblioteca-inicio/biblioteca-inicio.component';
import { LibroComponent } from './componentes/libro/libro.component';
import { LibrosPorSubcategoriaComponent } from './componentes/libros-por-subcategoria/libros-por-subcategoria.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  {
    path: 'post-inicio', component: PostInicioComponent,
    children: [
      { path: 'bienvenida', component: PostInicioBienvenidaComponent },
      { path: 'seccion-libros', component: SeccionMisLibrosComponent }
    ]
  },
  {
    path: 'biblioteca', component: BibliotecaComponent,
    children: [
      { path: 'inicio', component: BibliotecaInicioComponent },
      { path: 'libros-por-subcategoria/:cod', component: LibrosPorSubcategoriaComponent },
      {path:"libro/:codigo",  component: LibroComponent},
    ]
  },
  { path: 'login', component: LoginModalComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
