import styled from "styled-components";

export const Container = styled.div`
  border-style: none;
  padding: 0.8rem 1rem;
  border-radius: 2rem;
  outline: none;
  width: 20rem;
  background: var(--principal);

  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.5rem;
  }
  
  input {
    flex: 1;
    background: transparent;
    border-style: none;
    outline: 0;
    color: var(--text-base);
  }

  svg {
    color: var(--text-inputs); 
    margin-right: 0.7rem;
  }
`;