import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Button } from 'app/shared/components/Button';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from 'app/shared/components/Input';
import { SpanError } from './styles';
import { useFormik } from 'formik';
import { UsuarioInformación } from '../../models/UsuarioInformacion';

interface FormValues {
  clave: string;
  edad: string;
  nombre: string;
}

interface FormCrearProductoProp {
  onSubmit: (payload: UsuarioInformación) => any;
  disabled?: boolean;
  formTitle: string;
  initialValues?: FormValues;
}

const validationSchema = Yup.object().shape<FormValues>({
  edad: Yup.string().required('La edad es requerida.'),
  nombre: Yup.string().required('El nombre es requerido.'),
  clave: Yup.string()
    .required('La clave es requerida.')
    .length(4, 'La clave debe ser mayor a 4.'),
});

export const FormRegister: React.FC<FormCrearProductoProp> = ({
  onSubmit,
  disabled,
  formTitle,
  initialValues = {
    clave: '',
    edad: '',
    nombre: '',
  },
}) => {
  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    await onSubmit({
      clave: values.clave,
      edad: Number(values.edad),
      nombre: values.nombre,
      fecha_creacion: new Date().toISOString(),
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
        name="nombre"
        placeholder="Nombre"
        value={formik.values.nombre}
        onChange={formik.handleChange}
      />
      {formik.touched.nombre && formik.errors.nombre && (
        <SpanError>{formik.errors.nombre}</SpanError>
      )}

      <Input
        disabled={disabled}
        name="edad"
        placeholder="Edad"
        value={formik.values.edad}
        onChange={formik.handleChange}
      />
      {formik.touched.edad && formik.errors.edad && (
        <SpanError>{formik.errors.edad}</SpanError>
      )}

      <Input
        disabled={disabled}
        name="clave"
        placeholder="Clave"
        value={formik.values.clave}
        onChange={formik.handleChange}
      />
      {formik.touched.clave && formik.errors.clave && (
        <SpanError>{formik.errors.clave}</SpanError>
      )}
      <Button type="submit">Registrar</Button>
    </form>
  );
};

FormRegister.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formTitle: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
