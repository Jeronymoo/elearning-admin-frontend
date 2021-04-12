import styled from "styled-components";

export const Container = styled.header`
    background: var(--purple);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled.button`
  background: transparent;
  border: none;

  svg {
    color: var(--principal);
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
