import * as PropTypes from 'prop-types';
import * as React from 'react';
// import { DivContainer, DivRow } from './styles';
// import { FormCrearProducto } from '../../components/FormCrearProducto';
// import { ListaReservas } from '../../components/ListarProductos';
// import { PaginadorProductos } from '../../components/PaginadorProductos';
import { useEffect } from 'react';
import { Usuario } from '../../models/Usuario';

interface GestionProductosProps {
//   productos: Array<Producto>;
//   listarProductos: (numeroPagina: number) => void;
//   agregarNuevoProducto: (productos: Producto) => void;
//   eliminarProducto: (productos: Producto) => void;
//   cantidadTotalProducto: number;
//   crearReserva: (reserva: Reserva) => void;
//   reservas: Array<Reserva>;
//   obtenerReservas: (uid:number) => void;
}

export const GestionUsuarios: React.FC<GestionProductosProps> = ({
  // agregarNuevoProducto,
  // productos,
  // listarProductos,
  // eliminarProducto,
  // cantidadTotalProducto,
//   crearReserva,
//   reservas,
//   obtenerReservas,
}) => {
//   useEffect(() => {
//     obtenerReservas(12)
//   }, [obtenerReservas]);
//   console.log(reservas);
  
  return (
      null
    // <DivContainer>
    //   <DivRow>
    //     <FormCrearProducto
    //       onSubmit={crearReserva}
    //       formTitle="Crear Reserva"
    //     />
    //   </DivRow>
    //   <DivRow>
    //     <ListaReservas
    //       reservas={reservas}
    //       // onClickEliminarProducto={eliminarProducto}
    //     />
    //     {/* <PaginadorProductos
    //       cantidadTotalProductos={cantidadTotalProducto}
    //       onClickCambiarPagina={listarProductos}
    //     /> */}
    //   </DivRow>
    // </DivContainer>
  );
};

// GestionProductos.propTypes = {
//   productos: PropTypes.array.isRequired,
//   listarProductos: PropTypes.func.isRequired,
//   agregarNuevoProducto: PropTypes.func.isRequired,
//   eliminarProducto: PropTypes.func.isRequired,
//   cantidadTotalProducto: PropTypes.number.isRequired,
//   crearReserva: PropTypes.func.isRequired,
//   reservas: PropTypes.array.isRequired,
// };
