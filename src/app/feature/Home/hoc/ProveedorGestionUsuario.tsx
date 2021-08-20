import { EstadoGeneral } from '../../../../app/core/redux/modelo/EstadoGeneral';
import { GestionUsuarios } from '../containers/GestionUsuarios';
import { connect } from 'react-redux';
import {
  loguearUsuario,
  registrarUsuario,
} from 'app/core/redux/acciones/usuario/UsuarioAcciones';

const mapStateToProps = (state: EstadoGeneral) => {
  return state.usuario;
};

export const ProveedorGestionUsuario = connect(mapStateToProps, {
  loginUsuario: loguearUsuario,
  registrarUsuario,
})(GestionUsuarios);
