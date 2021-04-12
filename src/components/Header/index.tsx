import logoImg from "../../assets/logo.svg"

import { Link } from 'react-router-dom';
import { Container, Content, Button } from "./styles"
import { FiPower } from "react-icons/fi";
import { useAuth } from '../../context/AuthContext';
// import Input from "../Input";

export function Header() {
  const { user ,signOut } = useAuth();

  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logoImg} alt="e learning"/>
        </Link>
        { user ? (
          <Button onClick={signOut}>
            <FiPower size={20} />
          </Button>
        ) : <div></div>}
      </Content>
    </Container>
  )
}