import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Button } from 'app/shared/components/Button';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from 'app/shared/components/Input';
import { SpanError } from './styles';
import { useFormik } from 'formik';
import { UsuarioCredenciales } from '../../models/UsuarioCredenciales';
import { UsuarioInformación } from '../../models/UsuarioInformacion';
import { FormRegister } from '../FormRegister';

interface FormValues {
  clave: string;
  nombre: string;
}

interface FormCrearProductoProp {
  onSubmit: (payload: UsuarioCredenciales) => void;
  onRegister: (payload: UsuarioInformación) => void;
  disabled?: boolean;
  formTitle: string;
  initialValues?: FormValues;
}

const validationSchema = Yup.object().shape<FormValues>({
  nombre: Yup.string().required('El nombre es requerido.'),
  clave: Yup.string()
    .required('La clave es requerida.')
    .min(4, 'La clave debe ser mayor a 4.'),
});

export const FormLogin: React.FC<FormCrearProductoProp> = ({
  onSubmit,
  onRegister,
  disabled,
  formTitle,
  initialValues = {
    clave: '',
    nombre: '',
  },
}) => {
  const [isRegister, setIsRegister] = React.useState(false);
  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    await onSubmit({
      clave: values.clave,
      nombre: values.nombre,
    });
    resetForm();
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const FormLogin = (
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
        name="clave"
        placeholder="Clave"
        value={formik.values.clave}
        onChange={formik.handleChange}
      />
      {formik.touched.clave && formik.errors.clave && (
        <SpanError>{formik.errors.clave}</SpanError>
      )}
      <Button type="submit">Ingresar</Button>
    </form>
  );
  return (
    <>
      {isRegister ? (
        <FormRegister onSubmit={onRegister} formTitle="Registro" />
      ) : (
        FormLogin
      )}
      <button onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? 'Login' : 'Registro'}
      </button>
    </>
  );
};

FormLogin.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
  formTitle: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
