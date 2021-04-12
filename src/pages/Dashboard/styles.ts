import styled from "styled-components";

export const Container = styled.div`
  max-width: 1500px;
  margin: 2rem auto;

  h1 {
    color: var(--text-tile);
    font-family: 'Rubik', sans-serif;
    font-size: 1.5rem;
  }

  p {
    margin-top: 0.5rem;
    color: var(--text-details);
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    button {
      background: var(--pink);
      border: 0;
      padding: 1rem;
      border-radius: 0.25rem;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export const CardArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
`;

export const Card = styled.div`
  text-decoration: none;
  background: var(--principal);
  height: 17rem;
  width: 15rem;
  border-radius: 1.5rem;
  padding: 1rem;
  margin-top: 3rem;
  position: relative;
`;

export const CardContent = styled.div`
  h2 {
    text-decoration: none;
    color: var(--text-tile);
    font-size: 1rem;
    font-family: 'Rubik', sans-serif;
    margin: 3rem 0 0.5rem 1rem;
  }

  P {
    color: var(--text-details);
    font-size: 0.8rem;
    margin-left: 1rem;
  }

  img {
    margin: 1.5rem 0 0 1rem;
    width: 100px;
  }

  a {
    text-decoration: none;
    position: absolute;
    top: 3rem;
    right: 1rem;

    svg {
      color: #C4C4D1;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    border: 0;
    background: transparent;

    & + button {
      margin-top: 2rem;
    }

    svg {
      color: #C4C4D1;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;

