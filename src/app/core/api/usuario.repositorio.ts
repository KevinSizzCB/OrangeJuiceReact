import { AxiosResponse } from 'axios';
import { axiosIntance } from '../config/AxiosConfig';
import { UsuarioCredenciales } from '../../feature/Home/models/UsuarioCredenciales';
import { UsuarioInformaci√≥n } from '../../feature/Home/models/UsuarioInformacion';

const onThen = (response: AxiosResponse) => {
  const { data, status } = response;
  return { data, status }
}

const onCatch = (response: any) => {
  const { data, status } = response.response
  return { status, data }
}

const axiosHeaders = {
  "Content-Type": "application/json"
}

export const UsuarioRepositorio = {
  registrarUsuario: (usuario: UsuarioInformaci√≥n) =>
    axiosIntance.post(`/usuario/registro`, usuario, { headers: axiosHeaders })
      .then(onThen)
      .catch(onCatch),
  loguearUsuario: (usuario: UsuarioCredenciales) =>
    axiosIntance.post(`/usuario/login`, usuario, { headers: axiosHeaders })
      .then(onThen)
      .catch(onCatch),
};
