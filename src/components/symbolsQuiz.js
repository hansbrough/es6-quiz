import React from 'react';
import GraphUI from './GraphUI';

const QuizPage = () => {
  const introText = "Test your JS Symbol knowledge. Click 'next' to start";

  return (
    <main>
      <h2>JS Symbols Quiz</h2>
      <GraphUI
        graph_path="/data/graph/symbols"
        question_set_path="/data/questions/symbols"
        intro_text={introText}
      />
    </main>
  )
};

export default QuizPage;
