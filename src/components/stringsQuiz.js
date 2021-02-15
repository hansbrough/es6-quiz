import React from 'react';
import GraphUI from './GraphUI';

const QuizPage = () => {
  const introText = "Test your knowledge about Strings in Javascript. Click 'next' to start";

  return (
    <main>
      <h2>JS Strings Quiz</h2>
      <GraphUI
        graph_path="/data/graph/strings"
        question_set_path="/data/questions/strings"
        intro_text={introText}
      />
    </main>
  )
};

export default QuizPage;
