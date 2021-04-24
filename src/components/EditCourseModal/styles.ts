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
  }

  input[type="file"] {
    display: none;
  }

  label {
    display: inline-block;
    width: 100%;
    padding: 1.5rem 1.5rem;
    height: 4rem;
    background: var(--pink);
    color: var(--principal);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 0.5rem;

    cursor: pointer;
    text-align: center;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
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

export const ShowFile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 1.5rem;
  color: var(--text-base);
`;