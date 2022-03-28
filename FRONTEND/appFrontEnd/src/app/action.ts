import {createAction, props} from '@ngrx/store';
import { SesionUsuario } from './interfaces/SesionUsuario';

export const sesionUsuario = createAction('sesionUsuario',props<SesionUsuario>());
