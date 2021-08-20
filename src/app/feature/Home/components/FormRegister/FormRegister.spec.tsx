import * as React from 'react';
import { RenderResult, fireEvent, render, wait } from '@testing-library/react';
import { SinonStub, stub } from 'sinon';
import { FormRegister } from './';
import { setTextEvent } from '../../../../shared/utils/test';

describe('FormRegister test', () => {
  let componentWrapper: RenderResult;
  let componentProps: React.ComponentProps<typeof FormRegister> & {
    onSubmit: SinonStub;
  };

  beforeEach(() => {
    componentProps = {
      formTitle: 'Form test',
      onSubmit: stub(),
    };
    componentWrapper = render(<FormRegister {...componentProps} />);
  });

  it('should match snapshot', () => {
    expect(componentWrapper.container).toMatchSnapshot();
  });

  it('should fail on submit all fields missing', async () => {
    const elem = componentWrapper.container;
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(3);
    expect(spans[0].textContent).toBe('El nombre es requerido.');
    expect(spans[1].textContent).toBe('La edad es requerida.');
    expect(spans[2].textContent).toBe('La clave es requerida.');
  });

  it('should fail on submit two fields missing', async () => {
    const elem = componentWrapper.container;

    const nombre = elem.querySelector('input[name="nombre"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      nombre && fireEvent.change(nombre, setTextEvent('nombre', 'Lorem'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });

    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(2);
    expect(spans[0].textContent).toBe('La edad es requerida.');
    expect(spans[1].textContent).toBe('La clave es requerida.');
  });

  it('should fail on submit password with leng < 4', async () => {
    const elem = componentWrapper.container;
    const submitButton = elem.querySelector('button[type="submit"]');
    const clave = elem.querySelector('input[name="clave"]');
    const nombre = elem.querySelector('input[name="nombre"]');
    const edad = elem.querySelector('input[name="edad"]');

    await wait(() => {
      edad && fireEvent.change(edad, setTextEvent('edad', '22'));
    });

    await wait(() => {
      nombre && fireEvent.change(nombre, setTextEvent('nombre', 'Lorem'));
    });

    await wait(() => {
      clave && fireEvent.change(clave, setTextEvent('clave', '123'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });

    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(1);
    expect(spans[0].textContent).toBe('La clave debe ser mayor a 4.');
  });

  it('should submit', async () => {
    const elem = componentWrapper.container;

    const nombre = elem.querySelector('input[name="nombre"]');
    const clave = elem.querySelector('input[name="clave"]');
    const edad = elem.querySelector('input[name="edad"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      nombre && fireEvent.change(nombre, setTextEvent('nombre', 'Juan'));
    });

    await wait(() => {
      clave && fireEvent.change(clave, setTextEvent('clave', '1234'));
    });

    await wait(() => {
      edad && fireEvent.change(edad, setTextEvent('edad', '22'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });

    const formSubmitted = componentProps.onSubmit.firstCall.args[0];

    expect(formSubmitted.nombre).toBe('Juan');
    expect(formSubmitted.clave).toBe('1234');
    expect(formSubmitted.edad).toBe(22);
  });
});
