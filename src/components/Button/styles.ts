import styled from 'styled-components';

export const Container = styled.div`
  button {
    background: var(--pink);
    padding: 0.8rem 2rem;
    border-radius: 0.5rem;
    border-style: none;
    color: var(--principal);
    font-family: 'Rubik', sans-serif;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;