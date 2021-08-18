import { AxiosError, AxiosResponse } from 'axios';
import { axiosIntance } from '../config/AxiosConfig';
import { Reserva } from '../../feature/Producto/models/Reserva'

const NUMERO_REGISTROS = 10;
const limit = (count: number, p: number) =>
  `limit=${count}&offset=${p ? p * count : 0}`;



const onThen = (response: AxiosResponse) => {
  const { data, status } = response;
  return { data, status }
}

const onCatch = (response: any) => {
  const { data, status } = response.response
  return { status, data }
}

const axiosHeaders = {
  "Content-Type": "application/json"
}

export const ProductoRepositorio = {
  consultarPorPagina: (page: number) =>
    axiosIntance.get(`/articles?${limit(NUMERO_REGISTROS, page)}`),
  crearReserva: (reserva: Reserva) =>
    axiosIntance.post(`/reservas`, reserva, { headers: axiosHeaders })
      .then(onThen)
      .catch(onCatch),
  obtenerReservas: (uid: number) =>
    axiosIntance.get(`/reservas?uid=${uid}`)
      .then(onThen)
      .catch(onCatch),
};
