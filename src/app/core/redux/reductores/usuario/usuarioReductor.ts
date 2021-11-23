import {
  LOGIN_USUARIO,
  TiposAccionesUsuario,
  SINGUP_USUARIO,
  LOGOUT_USUARIO
} from '../../acciones/usuario/UsuarioTiposAcciones';
import { EstadoUsuario } from '../../modelo/EstadoUsuario';


const initialState: EstadoUsuario = {
  usuario: { edad: 0, nombre: '', id: 0 },
  isLogged: false,

  // error: ''
};

export default function (
  state = initialState,
  action: TiposAccionesUsuario
): EstadoUsuario {
  switch (action.type) {

    // case THROW_ERROR


    case LOGIN_USUARIO: {
      return {
        ...state,
        usuario: action.payload,
        isLogged: true
      }
    }

    case SINGUP_USUARIO: {
      return {
        ...state,
        usuario: action.payload,
        isLogged: true
      }
    }

    case LOGOUT_USUARIO: {
      return {
        ...state,
        isLogged: false,
        usuario: { edad: 0, nombre: '', id: 0 }
      }
    }

    default:
      return state;
  }
}
