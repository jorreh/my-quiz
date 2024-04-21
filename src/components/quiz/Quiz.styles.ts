import styled from "styled-components";

export const QuizStyle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--GreenDark);
  border-radius: var(--BorderRadiusSm);
  padding: 1rem 3rem;
  overflow-x: hidden;
  overflow-y: inherit;

  .quiz-answers {
    /* display: flex;
    flex-wrap: wrap;
    gap: 1em; */
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(16.5rem, 2fr));
    grid-gap: 1rem;

    padding: 1.8em 0;
  }

  .cta-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 20%;
    gap: 1em;

    button {
      width: 100%;

      /* &:hover {
        cursor: pointer;
        opacity: 0.8;
      } */
    }
  }

  @media screen and (max-width: 1061px) {
    h1 {
      font-size: 1.3rem;
    }

    .quiz-answers {
      padding: 1em 0;
    }
  }
`;

export const QuizAEndedStyle = styled(QuizStyle)`
  height: 100%;
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 4rem;
    }

    .emoji {
      font-size: 6em;
    }

    .retry-ico {
      font-size: 5em;
      color: var(--Active);
      cursor: pointer;
    }
  }
`;
