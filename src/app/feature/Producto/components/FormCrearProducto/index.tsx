import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Button } from 'app/shared/components/Button';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from 'app/shared/components/Input';
import { SpanError } from './styles';
import { useFormik } from 'formik';
import { Reserva } from '../../models/Reserva';

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
}

const validationSchema = Yup.object().shape<FormValues>({
  cantidad_jugos: Yup.string().required('El campo title es requerido.'),
  // uid: Yup.string().required('El campo body es requerido.'),
});

export const FormCrearProducto: React.FC<FormCrearProductoProp> = ({
  onSubmit,
  disabled,
  formTitle,
  initialValues = {
    cantidad_jugos: '',
  },
}) => {
  const handleSubmit = async(
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    await onSubmit({
      cantidad_jugos: Number(values.cantidad_jugos),
      fecha_creacion: new Date(),//,.toISOString(),
      uid: 12
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
      {/* <Input
        disabled={disabled}
        name="slug"
        placeholder="Slug"
        value={formik.values.slug}
        onChange={formik.handleChange}
      />
      {formik.touched.slug && formik.errors.slug && (
        <SpanError>{formik.errors.slug}</SpanError>
      )}
      <Input
        disabled={disabled}
        name="body"
        placeholder="Body"
        value={formik.values.body}
        onChange={formik.handleChange}
      />
      {formik.touched.body && formik.errors.body && (
        <SpanError>{formik.errors.body}</SpanError>
      )} */}
      <Button type="submit">Registrar</Button>
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
