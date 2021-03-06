import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow } from './styles';
import { Usuario } from '../../models/Usuario';
import { UsuarioCredenciales } from '../../models/UsuarioCredenciales';
import { UsuarioInformaci√≥n } from '../../models/UsuarioInformacion';
import { FormLogin } from '../../components/FormLogin';

interface GestionProductosProps {
  registrarUsuario: (usuario: UsuarioInformaci√≥n) => void;
  loginUsuario: (usuario: UsuarioCredenciales) => void;
  logOut: () => void;
  usuario: Usuario;
  isLogged: boolean;
}

export const GestionUsuarios: React.FC<GestionProductosProps> = ({
  registrarUsuario,
  loginUsuario,
  logOut,
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
          <>
            <p>{usuario.nombre}</p>
            <button onClick={() => logOut()}>LogOut</button>
          </>
        )}
      </DivRow>
    </DivContainer>
  );
};

GestionUsuarios.propTypes = {
  loginUsuario: PropTypes.func.isRequired,
  registrarUsuario: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};
