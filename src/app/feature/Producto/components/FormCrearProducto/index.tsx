import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Button } from 'app/shared/components/Button';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from 'app/shared/components/Input';
import { SpanError } from './styles';
import { useFormik } from 'formik';
import { Reserva } from '../../models/Reserva';
import { useSelector } from 'react-redux';
import { Usuario } from 'app/feature/Home/models/Usuario';

interface FormValues {
  // title: string;
  // slug: string;
  // body: string;
  cantidad_jugos: string;
  // uid:number;
}

interface FormCrearProductoProp {
  onSubmit: (payload: Reserva) => any;
  disabled?: boolean;
  formTitle: string;
  initialValues?: FormValues;
  usuario: Usuario;
}

const validationSchema = Yup.object().shape<FormValues>({
  cantidad_jugos: Yup.string().required('La cantidad de jugos es requerida.'),
});

export const FormCrearProducto: React.FC<FormCrearProductoProp> = ({
  onSubmit,
  disabled,
  formTitle,
  initialValues = {
    cantidad_jugos: '',
  },
  usuario,
}) => {
  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    await onSubmit({
      cantidad_jugos: Number(values.cantidad_jugos),
      fecha_creacion: new Date().toISOString(),
      uid: usuario.id,
    });
    resetForm();
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>{formTitle}</h2>
      <Input
        disabled={disabled}
        name="cantidad_jugos"
        placeholder="Cantidad de jugos"
        value={formik.values.cantidad_jugos}
        onChange={formik.handleChange}
      />
      {formik.touched.cantidad_jugos && formik.errors.cantidad_jugos && (
        <SpanError>{formik.errors.cantidad_jugos}</SpanError>
      )}
      <Button type="submit">Crear reserva</Button>
    </form>
  );
};

FormCrearProducto.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formTitle: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  initialValues: PropTypes.shape({
    cantidad_jugos: PropTypes.string.isRequired,
  }),
};
