import styled from "styled-components";

export const MainLayoutStyle = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1rem;
  height: 100%;

  .btn-toggle {
    display: none;
  }

  .info-col,
  .quiz-col {
    display: flex;
    flex-direction: column;
    background-color: var(--GreenLight);
    border-radius: var(--BorderRadius);
    padding: 1.25rem;
    height: 100%;

    &.scroll-locked {
      overflow: hidden;
    }
  }

  .info-col {
    transform: translateX(0);
    transition: transform 300ms ease-in-out;
  }

  // @media screen and (max-width: 1061px) {
  //grid-template-columns: 1.2fr 1.8fr;
  //}

  @media screen and (max-width: 1061px) {
    grid-template-columns: 1fr;
    .info-col {
      position: fixed;
      z-index: 3;
      width: 50%;
      box-shadow: 15px 10px 15px rgba(0, 0, 0, 0.5);

      &.hidden-mobile {
        transform: translateX(-110%);
        transition: transform 300ms ease-in-out;
      }
    }

    .btn-toggle {
      display: flex;
    }
  }

  @media screen and (max-width: 750px) {
    .info-col {
      width: 65%;
    }
  }

  @media screen and (max-width: 550px) {
    .info-col {
      width: 95%;
    }
  }
`;
