import {
  AGREGAR_PRODUCTO,
  ELIMINAR_PRODUCTO,
  LISTAR_PRODUCTOS,
  TiposAccionesProducto,
  CREAR_RESERVA,
  LISTAR_RESERVAS
} from '../../acciones/productos/ProductosTiposAcciones';
import { EstadoProducto } from '../../modelo/EstadoProducto';
import { Producto } from 'app/feature/Producto/models/Producto';
import { Reserva } from 'app/feature/Producto/models/Reserva';


const initialState: EstadoProducto = {
  productos: Array<Producto>(),
  cantidadTotalProducto: 0,
  reservas: Array<Reserva>()
};

export default function (
  state = initialState,
  action: TiposAccionesProducto
): EstadoProducto {
  switch (action.type) {
    case LISTAR_PRODUCTOS: {
      const productos = action.payload;
      return {
        ...state,
        productos,
        cantidadTotalProducto: action.cantidadTotalProducto,
      };
    }
    case AGREGAR_PRODUCTO: {
      const producto = action.payload;
      return {
        ...state,
        productos: [...state.productos, producto],
      };
    }

    case CREAR_RESERVA: {
      const reserva = action.payload;
      return {
        ...state,
        reservas: [...state.reservas, reserva]
      }
    }

    case LISTAR_RESERVAS: {

      const reservas = action.payload;
      return {
        ...state,
        reservas
      }
    }

    case ELIMINAR_PRODUCTO: {
      const producto = action.payload as Producto;
      return {
        ...state,
        productos: [
          ...state.productos.filter((p) => p.title !== producto.title),
        ],
      };
    }

    default:
      return state;
  }
}
