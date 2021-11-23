import React from 'react';
import { mount } from '@cypress/react';
import App from 'app/App';

describe('App interaction', () => {
  const nombreusuario = 'KevinMenor',
    edadUsuario = 10,
    cantidadJugos = 2,
    precioTotal = 3800,
    claveUsuario = '1234';
  const _nombreusuario = nombreusuario + Math.random();
  beforeEach(() => {
    mount(<App />);
    cy.intercept(
      {
        method: 'POST',
        url: 'usuario/login',
      },
      { nombre: nombreusuario, id: 12, edad: edadUsuario }
    ).as('apiLogin');
    cy.intercept(
      {
        method: 'POST',
        url: 'usuario/registro',
      },
      { nombre: _nombreusuario, id: 12, edad: edadUsuario }
    ).as('apiRegistro');
    cy.intercept(
      {
        method: 'GET',
        url: 'reservas?uid=12',
      },
      []
    ).as('apiObtenerReservas');
    cy.intercept(
      {
        method: 'POST',
        url: 'reservas',
      },
      {
        uid: 12,
        cantidad_jugos: cantidadJugos,
        fecha_creacion: new Date(),
        precio_total: precioTotal,
      }
    ).as('apiCrearReserva');
  });

  it('Should login te user', () => {
    cy.get('a').contains('Usuario').click();
    cy.get('input[placeholder="Nombre"]').type(nombreusuario);
    cy.get('input[placeholder="Clave"]').type(claveUsuario);
    cy.get('button').contains('Ingresar').click();
    cy.wait('@apiLogin').then((interception) => {
      assert.isNotNull(interception.response?.body, 'Call musnt be null');
    });
    cy.get('p').contains(nombreusuario);
  });

  it('Should register the user', () => {
    cy.get('a').contains('Usuario').click();
    cy.get('button').contains('LogOut').click();
    cy.get('button').contains('Registro').click();
    cy.get('input[placeholder="Nombre"]').type(_nombreusuario);
    cy.get('input[placeholder="Edad"]').type(edadUsuario.toString());
    cy.get('input[placeholder="Clave"]').type(claveUsuario);
    cy.get('button').contains('Registrar').click();
    cy.wait('@apiRegistro').then((interception) => {
      assert.isNotNull(interception.response?.body, 'Call musnt be null');
    });
    cy.get('p').contains(_nombreusuario);
  });

  it('Should create a reserva', () => {
    cy.get('a').contains('Reservas').click();
    cy.get('input[placeholder="Cantidad de jugos"]').type(
      cantidadJugos.toString()
    );
    cy.wait('@apiObtenerReservas').then((interception) => {
      assert.isNotNull(interception.response?.body, 'Call musnt be null');
    });
    cy.get('button').contains('Crear reserva').click();
    cy.get('td').contains(cantidadJugos);
    cy.get('td').contains(precioTotal);
  });
});
