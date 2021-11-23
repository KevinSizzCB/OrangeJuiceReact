import { UsuarioRepositorio } from 'app/core/api/usuario.repositorio';
import {
  LOGIN_USUARIO,
  LOGOUT_USUARIO,
  SINGUP_USUARIO,
} from './UsuarioTiposAcciones'
import { UsuarioCredenciales } from 'app/feature/Home/models/UsuarioCredenciales';
import { UsuarioInformación } from 'app/feature/Home/models/UsuarioInformacion';

export function loguearUsuario(usuario: UsuarioCredenciales) {
  return async function (dispatch: any) {
    const { status, data } = await UsuarioRepositorio.loguearUsuario(usuario);
    if (status >= 200 && status < 202) {
      return dispatch({
        type: LOGIN_USUARIO,
        payload: data
      })
    }
  }
}

export function logOut() {
  return ({
    type: LOGOUT_USUARIO
  })
}

export function registrarUsuario(usuario: UsuarioInformación) {
  return async function (dispatch: any) {
    const { status, data } = await UsuarioRepositorio.registrarUsuario(usuario);
    if (status >= 200 && status < 202) {
      return dispatch({
        type: SINGUP_USUARIO,
        payload: data
      })
    }
  }
}
