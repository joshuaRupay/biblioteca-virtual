

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/ApiService';
import { Usuario } from 'src/app/interfaces/Usuario';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})

//Registro
export class RegisterModalComponent implements OnInit {
  email: string = '';
  nombres: string = '';
  apellidos: string = '';
  contrasenia: string = '';
  contraseniaRepeticion: string = '';
  mensaje: string = '';

  constructor(private api: ApiService) { }

  ngOnInit(): void {

  }

  registrar(): void{
    console.log(this.email);
    console.log(this.apellidos);
    console.log(this.nombres);
    console.log(this.contrasenia);
    console.log(this.contraseniaRepeticion);
    if(this.contrasenia == this.contraseniaRepeticion){
      const usuario: Usuario = {
        id: undefined,
        nombres: this.nombres,
        apellidos: this.apellidos,
        email: this.email,
        contrasenia: this.contrasenia
      };
      this.api.agregarUsuario(usuario).subscribe( retorno =>{
        this.mensaje = 'El usuario ' + retorno.nombres + ' fue registrado correctamente';
      });
    }
    else{
      this.mensaje = 'La contraseña no es la misma';
    }

  }
}