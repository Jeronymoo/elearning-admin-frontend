import React, { useCallback } from 'react';
import { FiUser, FiLock } from 'react-icons/fi'
import * as Yup from 'yup';

import { Header } from '../../components/Header';
import Input from "../../components/Input";
import Button from "../../components/Button";
import Form from '../../components/Form';
import { Container } from './styles';
import { useAuth } from '../../context/AuthContext';

interface FormValue {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { user, signIn } = useAuth();

  const OnSubmit = useCallback(async (data: FormValue) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required("E-mail obrigatório").email("Digite um e-mail válido"),
        password: Yup.string().min(6, "No mínimo 6 dígitos"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.error(err);
    }
    await signIn({
      email: data.email,
      password: data.password
    })

  }, [signIn]); 

  console.log(user);

  return (
    <>
      <Header />
      <Container>
        <h1>Área administrativa</h1>
        <Form onSubmit={OnSubmit}>
          <Input name="email" icon={FiUser} placeholder="E-mail"/>
          <Input name="password" type="password" icon={FiLock} placeholder="Password"/>
          <Button>Entrar</Button>
        </Form>
      </Container>
    </>
  );
}

export default SignIn;