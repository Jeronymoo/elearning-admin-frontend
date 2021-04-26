import React, { useCallback } from 'react';
import { FiUser, FiLock } from 'react-icons/fi'
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';

import { Header } from '../../components/Header';
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container } from './styles';
import { useAuth } from '../../context/AuthContext';
import { yupResolver } from '@hookform/resolvers';

interface FormValue {
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  email: Yup.string().required("E-mail obrigatório").email("Digite um e-mail válido"),
  password: Yup.string().min(6, "Senha com no mínimo 6 dígitos"),
});

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const OnSubmit = useCallback(async (data: FormValue) => {
    try {
      await signIn({
        email: data.email,
        password: data.password
      })
    } catch (err) {
      console.log(err);
    }
    
  }, [signIn]); 

  return (
    <>
      <Header />
      <Container>
        <h1>Área administrativa</h1>
        <form onSubmit={handleSubmit(OnSubmit)}>
          <Input name="email" icon={FiUser} placeholder="E-mail" error={errors.email?.message} ref={register}/>
          <Input name="password" type="password" icon={FiLock} placeholder="Password" error={errors.password?.message} ref={register}/>
          <Button type="submit">Entrar</Button>
        </form>
      </Container>
    </>
  );
}

export default SignIn;