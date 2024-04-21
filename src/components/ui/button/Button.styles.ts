import styled, { css } from "styled-components";

const answerBtnBorder = 0.16;
const answBtnPaddingTnB = 0.5;
const answBtnPaddingLnR = 0.8;

export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0.7rem;
  border-radius: var(--BorderRadiusSm);
  cursor: pointer;

  &.blue {
    background-color: var(--GreenPrimary);
    color: #fff;
    box-shadow: 0px 5px 0 #0e325b;
  }

  &.yellow {
    background-color: var(--Active);
    color: var(--GreenPrimary);
    box-shadow: 0px 5px 0 #ecd4ba;

    span {
      color: #fff;
    }

    &.disabled {
      background-color: #f5f5f5;
      box-shadow: 0px 5px 0 #e3e5e7;
      span {
        color: var(--GreenLight);
      }
    }
  }

  &.grey {
    background-color: var(--CtaGreyActive);
    color: var(--GreenPrimary);
    box-shadow: 0px 5px 0 #e3e5e7;
    &.disabled {
      background-color: #f5f5f5;
    }
  }

  &:active {
    transform: scale(0.95);
  }

  button:hover::after {
    transform: scale(1);
  }

  &.disabled {
    cursor: default;
    opacity: 0.7;
    transform: scale(1);
  }

  img {
    width: 1.2rem;
    height: 1.2rem;

    ${(props) => {
      // if button has icon & txt, make the icon smaller
      // if (typeof props.$children !== "undefined") {
      if (typeof props.children !== "undefined") {
        return css`
          width: 1.4rem;
          height: 1.4rem;
          margin-right: 0.2rem;
        `;
      }
    }}
  }

  span {
    font-size: 1rem;
    padding-left: 0.1rem;
    color: var(--GreenPrimary);
  }

  &.panel-toggle {
    position: fixed;
    top: 0.625rem;
    left: 0.625rem;
    padding: 0.3rem;
    z-index: 4;
    background-color: #fff;
    color: var(--GreenPrimary);
    box-shadow: 0px 5px 0 var(--GreenDark), 5px 10px 10px rgba(0, 0, 0, 0.5);

    img {
      width: 2.2rem;
      height: 2.2rem;
    }
  }
`;

export const QuizAnswerButtonStyle = styled(ButtonStyle)`
  box-sizing: border-box;
  // background-color: var(--BtnBlue);
  background-color: var(--GreenLight);
  border-color: #89dcbb;
  //color: var(--GreenPrimary);
  color: var(--BtnTxt);
  padding: ${answBtnPaddingTnB}rem ${answBtnPaddingLnR}rem;
  border-width: ${answerBtnBorder}rem;
  border-style: solid;
  width: 100%;

  /* Show answer styles for unselected btns */
  &.show-answer {
    &.correct {
      border-color: var(--BtnAnswerCorrect);
    }

    &.incorrect {
      // border-color: var(--BtnAnswerWrong);
    }
  }

  /* Styles for selected btns */
  &.selected {
    border-color: var(--GreenDark);
    background-color: var(--GreenPrimary);
    color: #fff;

    /* Show answer styles for selected btns */
    &.show-answer {
      &.correct {
        border-color: var(--BtnAnswerCorrect);
        background-color: #fff;
        color: var(--GreenPrimary);
      }

      &.incorrect {
        border-color: var(--BtnAnswerWrong);
        background-color: #fff;
        color: var(--GreenPrimary);
      }
    }
  }

  &:active {
    transform: none;
  }
`;
