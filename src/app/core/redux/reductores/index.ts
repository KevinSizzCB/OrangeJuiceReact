import { combineReducers } from 'redux';
import productos from './productos/productosReductor';
import usuario from './usuario/usuarioReductor'

export default combineReducers({ productos, usuario });
