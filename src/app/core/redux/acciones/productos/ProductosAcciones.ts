import {
  AGREGAR_PRODUCTO,
  ELIMINAR_PRODUCTO,
  LISTAR_PRODUCTOS,
  TiposAccionesProducto,
  CREAR_RESERVA,
  LISTAR_RESERVAS
} from './ProductosTiposAcciones';
import { Producto } from 'app/feature/Producto/models/Producto';
import { Reserva } from 'app/feature/Producto/models/Reserva';
import { ProductoRepositorio } from 'app/core/api/productos.repositorio';

export function listarProductos(
  productos: Array<Producto>,
  cantidadTotalProducto: number
): TiposAccionesProducto {
  return {
    type: LISTAR_PRODUCTOS,
    payload: productos,
    cantidadTotalProducto,
  };
}

export function agregarNuevoProducto(
  producto: Producto
): TiposAccionesProducto {
  return {
    type: AGREGAR_PRODUCTO,
    payload: producto,
  };
}

export function eliminarProducto(producto: Producto): TiposAccionesProducto {
  return {
    type: ELIMINAR_PRODUCTO,
    payload: producto,
  };
}

export function listarProductosAsync(numeroPagina: number) {
  return function (dispacth: any) {
    // ProductoRepositorio.consultarPorPagina(
    //   numeroPagina
    // ).then((respuesta: any) =>
    //   dispacth(
    //     listarProductos(respuesta.data.articles, respuesta.data.articlesCount)
    //   )
    // );
    dispacth(
      listarProductos([], 1)
    )
  };
}

export function obtenerReservas(reservas: Reserva[]): TiposAccionesProducto {
  return {
    type: LISTAR_RESERVAS,
    payload: reservas
  }
}

export function obtenerReservasAsync(uid: number) {
  return async function (dispacth: any) {
    ProductoRepositorio.obtenerReservas(uid)
      .then(({ data }) =>
        dispacth(obtenerReservas(data))
      );
  };
}

export function crearReserva(reserva: Reserva)/* : Promise<TiposAccionesProducto | null> */ {
  return async function (dispatch: any) {
    const { status } = await ProductoRepositorio.crearReserva(reserva);
    if (status > 200 && status < 202) {
      return dispatch({
        type: CREAR_RESERVA,
        payload: reserva
      })
    }
  }
}
