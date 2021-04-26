import React, { InputHTMLAttributes, forwardRef, ForwardRefRenderFunction } from "react";
import { IconBaseProps } from "react-icons"

import { Container, Error } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
    error?: string;
}

const InputRef: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ icon: Icon, error, ...rest}, ref) => {
  return (
    <>
      <Container>
        { Icon && <Icon size={20}/> }
        <input {...rest} ref={ref}/>
      </Container>
      <Error>{error}</Error>
    </>

  );
};

const Input = forwardRef(InputRef);

export default Input;
