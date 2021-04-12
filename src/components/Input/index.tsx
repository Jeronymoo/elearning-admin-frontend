import React, { InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons"

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    register?: string;
    icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, register, ...rest}) => {
  return (
    <Container>
      { Icon && <Icon size={20}/> }
      <input {...rest} ref={register}/>
    </Container>
  );
};


export default Input;