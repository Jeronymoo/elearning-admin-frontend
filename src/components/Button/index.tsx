import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
}

const Button: React.FC<ButtonProps> = ({children, ...rest}) => {
  return (
    <Container>
      <button {...rest}>{children}</button>
    </Container>
  );
};

export default Button;