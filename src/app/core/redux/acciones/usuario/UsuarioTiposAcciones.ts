import { Usuario } from 'app/feature/Home/models/Usuario';

export const LOGIN_USUARIO = 'LOGIN_USUARIO';
export const SINGUP_USUARIO = 'SINGUP_USUARIO';
export const LOGOUT_USUARIO = 'LOGOUT_USUARIO';



interface AccionLoginUsuario {
  type: typeof LOGIN_USUARIO;
  payload: Usuario;
}

interface AccionSingupUsuario {
  type: typeof SINGUP_USUARIO;
  payload: Usuario;
}

interface AccionLogoutUsuario {
  type: typeof LOGOUT_USUARIO;
}

export type TiposAccionesUsuario =
  | AccionLoginUsuario
  | AccionLogoutUsuario
  | AccionSingupUsuario;
