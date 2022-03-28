import {createReducer, on} from '@ngrx/store';
import * as states from './action';
import { SesionUsuario } from './interfaces/SesionUsuario';

export const initialSesionUsuario:SesionUsuario = {
    id: 0,
    nombres: '',
    apellidos: '',
    email: '',
    contrasenia: '',
};

const _sesionUsuarioReducer = createReducer(
    initialSesionUsuario, 
    on(states.sesionUsuario,(state,{id,nombres,apellidos,email,contrasenia}) => ( 
            {id: id, nombres: nombres, apellidos: apellidos, email: email, contrasenia: contrasenia } )
    )
);
export function sesionUsuarioReducer(state: SesionUsuario, action: any){
    return _sesionUsuarioReducer(state,action);
}
