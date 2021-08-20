import { EstadoProducto } from './EstadoProducto';
import { EstadoUsuario } from './EstadoUsuario'

export interface EstadoGeneral {
  productos: EstadoProducto;
  usuario: EstadoUsuario;
}
