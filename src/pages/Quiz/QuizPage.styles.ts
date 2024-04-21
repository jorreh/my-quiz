import styled from "styled-components";

export const LoadingScreenStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .loader {
    margin-top: 1rem;
    border: 0.7rem solid #f3f3f3; /* Light grey */
    border-top: 0.7rem solid var(--Active);
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
