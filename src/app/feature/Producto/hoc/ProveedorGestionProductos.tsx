import {
  agregarNuevoProducto,
  eliminarProducto,
  listarProductosAsync,
  crearReserva,
  obtenerReservasAsync,
} from 'app/core/redux/acciones/productos/ProductosAcciones';
import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import { GestionProductos } from '../containers/GestionProductos';
import { connect } from 'react-redux';

const mapStateToProps = (state: EstadoGeneral) => {
  return { ...state.productos, ...state.usuario };
};

export const ProveedorGestionProductos = connect(mapStateToProps, {
  listarProductos: listarProductosAsync,
  agregarNuevoProducto,
  eliminarProducto,
  crearReserva,
  obtenerReservas: obtenerReservasAsync,
})(GestionProductos);
