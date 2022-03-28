import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {ApiService} from "../../ApiService";
import {Usuario} from "../../interfaces/Usuario";

@Component({
  selector: 'app-nav-bar-inicio',
  templateUrl: './nav-bar-inicio.component.html',
  styleUrls: ['./nav-bar-inicio.component.scss']
})
export class NavBarInicioComponent implements OnInit {

  email: string = '';
  contrasenia: string = '';
  mensaje: string = '';

  iniciarseClick: boolean = false;
  registrarseClick: boolean = false;
  opacidad: string = 'z-10 opacity-0';

  constructor(
    private api: ApiService,
    private storeSesion: Store<{sesionUsuario: any}>,
    private route: Router) { }

  ngOnInit(): void {

  }

  modalIniciarSesion() {
    if(!this.iniciarseClick) {
      this.iniciarseClick = true;
      this.opacidad = 'z-30 opacity-70';
    }
    else {
      this.iniciarseClick = false;
      this.opacidad = 'z-10 opacity-0';
    }

  }

  modalRegistrar() {
    if(!this.registrarseClick) {
      this.registrarseClick = true;
      this.opacidad = 'z-30 opacity-70';
    }
    else {
      this.registrarseClick = false;
      this.opacidad = 'z-10 opacity-0';
    }

  }

  ingresar(): void{
    const usuario: Usuario = {
      id: 0,
      nombres: '',
      apellidos: '',
      email: this.email,
      contrasenia: this.contrasenia
    }
    this.api.obtenerUsuario(usuario).subscribe( respuesta => {
      if(respuesta.id != 0){
        this.mensaje = 'Validación exitosa';
        /*const sesionUsuario: SesionUsuario ={
          id: respuesta.id,
          email: respuesta.email,
          nombres: respuesta.nombres + ' ' + respuesta.apellidos
        };
        this.storeSesion.dispatch(action.sesionUsuario(sesionUsuario));
        this.route.navigateByUrl("");*/
      }
      else{
        this.mensaje = 'Los datos ingresados son erróneos';
      }
    });
  }

}