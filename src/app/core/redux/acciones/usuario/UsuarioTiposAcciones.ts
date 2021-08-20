import { Usuario } from 'app/feature/Home/models/Usuario';

export const LOGIN_USUARIO = 'LOGIN_USUARIO';
export const SINGUP_USUARIO = 'SINGUP_USUARIO';


interface AccionLoginUsuario {
  type: typeof LOGIN_USUARIO;
  payload: Usuario;
}

interface AccionSingupUsuario {
  type: typeof SINGUP_USUARIO;
  payload: Usuario;
}

export type TiposAccionesUsuario =
  | AccionLoginUsuario
  | AccionSingupUsuario;
