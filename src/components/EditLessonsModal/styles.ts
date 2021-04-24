import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    font-family: 'Rubik', sans-serif;
    font-size: 1.5rem;
    color: var(--text-title);
    margin-bottom: 1.5rem;
  }

  input[type="text"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: #e7e9ee;
    border: 1px solid var(--text-details);

    font-size: 1rem;

    & + input {
      margin-top: 1.5rem;
    }
  }

  button {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--pink);
    color: var(--principal);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;