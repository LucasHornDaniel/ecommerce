import React from 'react';
import { render } from '@testing-library/react';
import Ecommerce from './ecommerce';

describe(' Teste do componente ecommerce', ()=> {


it('deve renderizar o componente sem erros', () => {
  const { getByText } = render(<Ecommerce />);
  const linkElement = getByText(/checkout/i);
  expect(linkElement).toBeInTheDocument();
  });

});
