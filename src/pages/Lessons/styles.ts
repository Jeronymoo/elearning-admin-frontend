import styled from "styled-components";

export const Container = styled.div`
  max-width: 1500px;
  margin: 2rem auto;

  display: flex;

  p {
    margin-bottom: 2rem;
  }

  iframe {
    border-style: none;
  }
`;

export const Info = styled.div`
  max-width: 1500px;
  margin: 2rem auto;

  h1 {
    font-family: 'Rubik', sans-serif;
    font-size: 1.5rem;
    color: var(--text-tile);
  }

  p {
    margin-top: 0.5rem;
    color: var(--text-details);
  }

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

export const LessonsList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  overflow-y: scroll;

  button {
    border-style: none;
    background-color: transparent;
  }
`;

export const LessonArea = styled.div`
  margin-left: 30rem;
  background: var(--principal);
  border-radius: 1rem;
  padding: 2rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-family: 'Rubik', sans-serif;
    font-size: 1.5rem;
    color: var(--text-tile);
    margin-bottom: 2rem;
  }

  p {
    color: var(--text-base);
    margin: 2rem 0 0 0;
  }
`;

export const LessonCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-style: none;
  max-width: 400px;
  background: var(--principal);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: background 0.2s;

  & + div {
    margin-top: 1rem;
  }

  &:hover {
      background: #f7f2ff;
  }

  button {
    margin-right: 1rem;
  }

  h1 {
      font-family: 'Rubik', sans-serif;
      font-size: 1rem;
      color: var(--text-tile);
  }

  small {
    display: inline-block;
    color: var(--text-inputs);
    margin: 1rem 0.5rem 0 0;
  }

  div {
    button {
      svg {
        color: #C4C4D1;
        transition: filter 0.2s;
      }

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
