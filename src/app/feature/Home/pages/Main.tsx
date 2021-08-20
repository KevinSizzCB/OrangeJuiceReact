import * as React from 'react';
import { Layout } from 'app/shared/components/Layout';
import { RouteComponentProps } from 'react-router-dom';
import { ProveedorGestionUsuario } from '../hoc/ProveedorGestionUsuario';

const UserMainPage: React.FC<RouteComponentProps> = () => (
  <Layout title="User" description="Sección de usuario">
    <ProveedorGestionUsuario />
  </Layout>
);

UserMainPage.displayName = 'UserMainPage';

export default UserMainPage;
