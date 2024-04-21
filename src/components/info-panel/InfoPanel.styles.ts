import styled from "styled-components";

const answBtnPaddingLnR = 2.6;
const avatarImgSize = 6.5;

export const InfoPanelStyle = styled.div`
  height: 100%;
  display: grid;
  /* grid-template-rows: 1fr auto; */
  grid-template-rows: minmax(40%, 1fr) auto;

  .content-wrapper {
    position: relative;
    .img-overlay {
      padding: 0.4rem;
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 20%;
      top: 0;

      .stats-wrapper {
        display: none;
        width: 100%;
        height: 20%;
        /* background-color: #2d89cc; */
      }

      .circle-container {
        width: ${avatarImgSize}em;
        height: ${avatarImgSize}em;
        background-color: var(--GreenLight);
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: -${answBtnPaddingLnR / 3.2}rem;
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.4);

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          /* transform: scale(0.9) translateY(7%); */
        }
      }
    }

    .img-wrapper {
      width: 100%;
      height: 20%;
      overflow: hidden;
      border-top-left-radius: var(--BorderRadiusSm);
      border-top-right-radius: var(--BorderRadiusSm);

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        /* transform: scale(1.5); */
        filter: brightness(0.7);
      }
    }

    .body {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 80%;
      background-color: #fff;
      color: var(--GreenPrimary);
      padding: 1.2rem;
      padding-top: ${answBtnPaddingLnR}rem;
      text-align: center;

      border-bottom-left-radius: var(--BorderRadiusSm);
      border-bottom-right-radius: var(--BorderRadiusSm);

      overflow-y: scroll;

      hr {
        height: 0.11em;
        margin: 0.5rem 0;
        width: 40%;
        background-color: var(--GreenPrimary);
      }

      p {
        padding: 0.7em 0;
      }
    }
  }

  .button-wrapper {
    padding: 1rem 0 0 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.2rem;
    display: none;
  }
`;
