import { InfoPanelStyle } from "./InfoPanel.styles";
import Button from "../ui/button/Button";

import { useQuizContext } from "../../hooks/useQuizContext";

const InfoPanel = () => {
  const { questions, questionIndex } = useQuizContext();

  return (
    <InfoPanelStyle>
      <div className="content-wrapper">
        <div className="img-overlay">
          <div className="stats-wrapper"></div>
          <div className="circle-container">
            <img src="/img/avaa.webp" alt="avatar" />
          </div>
        </div>

        <div className="img-wrapper">
          <img src="/img/background.jpg" alt="background" />
        </div>

        {questionIndex < questions.length && (
          <div className="body">
            <h1>Question {questionIndex + 1}</h1>
            <hr></hr>
            <p>{questions[questionIndex]?.questionIntro}</p>
          </div>
        )}

        {questionIndex >= questions.length && (
          <div className="body">
            <h1>End of quiz</h1>
          </div>
        )}
      </div>

      <div className="button-wrapper">
        {/* <img src="/img/icons/question-solid.svg" alt="q-icon" /> */}
        <Button icon="question-solid.svg"></Button>
        <Button icon="arrow-rotate-right-solid.svg"></Button>
        <Button icon="music-note-slash-solid.svg"></Button>
        <Button icon="map-solid.svg" color="yellow">
          Overview
        </Button>
      </div>
    </InfoPanelStyle>
  );
};

export default InfoPanel;
