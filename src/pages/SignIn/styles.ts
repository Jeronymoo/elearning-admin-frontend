import styled from 'styled-components';

export const Container = styled.div`
  height: 50vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    input {
      width: 14rem;
    }
  }

  h1 {
    font-family: 'Rubik', sans-serif;
    font-size: 1.5rem;
    color: var(--text-title);
    margin-bottom: 2rem;
  }
`;