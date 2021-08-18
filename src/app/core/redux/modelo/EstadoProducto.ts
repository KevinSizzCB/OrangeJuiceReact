import { Producto } from 'app/feature/Producto/models/Producto';
import { Reserva } from 'app/feature/Producto/models/Reserva';

export interface EstadoProducto {
  productos: Producto[];
  cantidadTotalProducto: number;
  reservas: Reserva[];
}
