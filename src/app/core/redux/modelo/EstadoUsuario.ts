import { Usuario } from 'app/feature/Home/models/Usuario';

export interface EstadoUsuario {
  usuario: Usuario;
  isLogged: boolean;
}
