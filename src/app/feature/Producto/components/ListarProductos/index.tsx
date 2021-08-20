import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Table } from './styles';
import { Reserva } from '../../models/Reserva';

export interface ListareservasProps {
  reservas: Array<Reserva>;
}

export const ListaReservas: React.FC<ListareservasProps> = ({
  reservas = [],
}) => {
  return (
    <Table>
      <thead>
        <tr>
          <td>
            <b>Cantidad jugos</b>
          </td>
          <td>
            <b>Fecha creación</b>
          </td>
          <td>
            <b>Precio total</b>
          </td>
        </tr>
      </thead>
      <tbody>
        {reservas?.map((reserva: any) => {
          return (
            <tr key={reserva.fecha_creacion.toString()}>
              <td>{reserva.cantidad_jugos}</td>
              <td>{`${reserva.fecha_creacion
                ?.split('.')[0]
                ?.replace('T', ', hora: ')
                ?.replace(new RegExp('-', 'g'), '/')}`}</td>
              <td>{`${reserva.precio_total}`}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

ListaReservas.propTypes = {
  reservas: PropTypes.array.isRequired,
};
