import * as React from 'react';
import { RenderResult, fireEvent, render, wait } from '@testing-library/react';
import { SinonStub, stub } from 'sinon';
import { FormCrearProducto } from './';
import { setTextEvent } from 'app/shared/utils/test';

describe('FormCrearProducto test', () => {
  let componentWrapper: RenderResult;
  let componentProps: React.ComponentProps<typeof FormCrearProducto> & {
    onSubmit: SinonStub;
  };

  beforeEach(() => {
    componentProps = {
      formTitle: 'Form test',
      onSubmit: stub(),
      usuario: { edad: 10, id: 0, nombre: 'Juan' },
    };
    componentWrapper = render(<FormCrearProducto {...componentProps} />);
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
    expect(spans.length).toBe(1);
    expect(spans[0].textContent).toBe('La cantidad de jugos es requerida.');
  });

  it('should submit', async () => {
    const elem = componentWrapper.container;

    const cantidad_jugos = elem.querySelector('input[name="cantidad_jugos"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      cantidad_jugos &&
        fireEvent.change(cantidad_jugos, setTextEvent('cantidad_jugos', '5'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });

    const formSubmitted = componentProps.onSubmit.firstCall.args[0];

    expect(formSubmitted.cantidad_jugos).toBe(5);
  });
});
