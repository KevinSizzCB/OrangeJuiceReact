import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { HomeRouter } from 'app/feature/Home/HomeRouter';
// import MainPage from 'app/Main';
import { NavigationHeader } from 'app/shared/components/NavigationHeader';
import { ProductoRouter } from 'app/feature/Producto/ProductoRouter';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavigationHeader />
      <Switch>
        <Route exact path="/">
          <Redirect to="/usuario" />
        </Route>
        <Route path="/usuario" component={HomeRouter} />
        <Route path="/reservas" component={ProductoRouter} />
      </Switch>
    </BrowserRouter>
  );
};
