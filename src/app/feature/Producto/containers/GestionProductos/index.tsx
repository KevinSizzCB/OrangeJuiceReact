import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow } from './styles';
import { FormCrearProducto } from '../../components/FormCrearProducto';
import { ListaReservas } from '../../components/ListarProductos';
import { Producto } from '../../models/Producto';
import { useEffect } from 'react';
import { Reserva } from '../../models/Reserva';
import { Usuario } from 'app/feature/Home/models/Usuario';

interface GestionProductosProps {
  productos: Array<Producto>;
  listarProductos: (numeroPagina: number) => void;
  agregarNuevoProducto: (productos: Producto) => void;
  eliminarProducto: (productos: Producto) => void;
  cantidadTotalProducto: number;
  crearReserva: (reserva: Reserva) => void;
  reservas: Array<Reserva>;
  obtenerReservas: (uid: number) => void;
  usuario: Usuario;
  isLogged: boolean;
}

export const GestionProductos: React.FC<GestionProductosProps> = ({
  crearReserva,
  reservas,
  obtenerReservas,
  usuario,
  isLogged,
}) => {
  useEffect(() => {
    if (isLogged) {
      obtenerReservas(usuario.id);
    }
  }, [obtenerReservas, isLogged, usuario]);

  return (
    <DivContainer>
      {isLogged ? (
        <>
          <DivRow>
            <FormCrearProducto
              onSubmit={crearReserva}
              formTitle="Crear Reserva"
            />
          </DivRow>
          <DivRow>
            <ListaReservas reservas={reservas} />
          </DivRow>
        </>
      ) : (
        <p>No está logueado</p>
      )}
    </DivContainer>
  );
};

GestionProductos.propTypes = {
  productos: PropTypes.array.isRequired,
  listarProductos: PropTypes.func.isRequired,
  agregarNuevoProducto: PropTypes.func.isRequired,
  eliminarProducto: PropTypes.func.isRequired,
  cantidadTotalProducto: PropTypes.number.isRequired,
  crearReserva: PropTypes.func.isRequired,
  reservas: PropTypes.array.isRequired,
};
