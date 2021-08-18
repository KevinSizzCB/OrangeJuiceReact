import {
    agregarNuevoProducto,
    eliminarProducto,
    listarProductosAsync,
    crearReserva,
    obtenerReservasAsync
} from '../../../../app/core/redux/acciones/productos/ProductosAcciones';
import { EstadoGeneral } from '../../../../app/core/redux/modelo/EstadoGeneral';
import { GestionUsuarios } from '../containers/GestionUsuarios';
import { connect } from 'react-redux';

const mapStateToProps = (state: EstadoGeneral) => {
return state.productos;
};

export const ProveedorGestionUsuario = connect(mapStateToProps, {
listarProductos: listarProductosAsync,
agregarNuevoProducto,
eliminarProducto,
crearReserva,
obtenerReservas: obtenerReservasAsync
})(GestionUsuarios);
