import * as React from 'react';
import { Layout } from 'app/shared/components/Layout';
import { ProveedorGestionProductos } from '../hoc/ProveedorGestionProductos';
import { RouteComponentProps } from 'react-router-dom';

const MainPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Reservas" description="Gestión de reservas">
      <ProveedorGestionProductos/>
    </Layout>
  );
};

MainPage.displayName = 'HomeMainPage';

export default MainPage;
