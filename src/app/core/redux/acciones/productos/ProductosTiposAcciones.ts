import { Producto } from 'app/feature/Producto/models/Producto';
import { Reserva } from 'app/feature/Producto/models/Reserva';

export const LISTAR_PRODUCTOS = 'LISTAR_PRODUCTOS';
export const AGREGAR_PRODUCTO = 'AGREGAR_PRODUCTO';
export const ELIMINAR_PRODUCTO = 'ELIMINAR_PRODUCTO';
export const CREAR_RESERVA = 'CREAR_RESERVA';
export const LISTAR_RESERVAS = 'LISTAR_RESERVAS';


interface AccionListarProductos {
  type: typeof LISTAR_PRODUCTOS;
  payload: Producto[];
  cantidadTotalProducto: number;
}

interface AccionAgregarProducto {
  type: typeof AGREGAR_PRODUCTO;
  payload: Producto;
}

interface AccionEliminarProducto {
  type: typeof ELIMINAR_PRODUCTO;
  payload: Producto;
}

interface AccionCrearReserva {
  type: typeof CREAR_RESERVA;
  payload: Reserva;
}

interface AccionListarReservas {
  type: typeof LISTAR_RESERVAS;
  payload: Reserva[];
}

export type TiposAccionesProducto =
  | AccionListarProductos
  | AccionAgregarProducto
  | AccionCrearReserva
  | AccionListarReservas
  | AccionEliminarProducto;
