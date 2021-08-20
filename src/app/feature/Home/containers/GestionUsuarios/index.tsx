import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow } from './styles';
import { Usuario } from '../../models/Usuario';
import { UsuarioCredenciales } from '../../models/UsuarioCredenciales';
import { UsuarioInformación } from '../../models/UsuarioInformacion';
import { FormLogin } from '../../components/FormLogin';

interface GestionProductosProps {
  registrarUsuario: (usuario: UsuarioInformación) => void;
  loginUsuario: (usuario: UsuarioCredenciales) => void;
  usuario: Usuario;
  isLogged: boolean;
}

export const GestionUsuarios: React.FC<GestionProductosProps> = ({
  registrarUsuario,
  loginUsuario,
  usuario,
  isLogged = false,
}) => {
  return (
    <DivContainer>
      <DivRow>
        {!isLogged ? (
          <FormLogin
            formTitle="Login"
            onSubmit={loginUsuario}
            onRegister={registrarUsuario}
          />
        ) : (
          <p>{usuario.nombre}</p>
        )}
      </DivRow>
    </DivContainer>
  );
};

GestionUsuarios.propTypes = {
  loginUsuario: PropTypes.func.isRequired,
  registrarUsuario: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};
