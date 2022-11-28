import React from 'react';
import { render, screen } from '@testing-library/react';
import Service from './Service';

describe('Testando Service', () => {
test('quando o número aleatório é par, a função retorna `true`', () => {
    const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

    render(<Service />);
    const numero = screen.getByRole(1);
    
  expect(numero).toBeInTheDocument(); // Como garantimos que o número retornado será par?
});
});