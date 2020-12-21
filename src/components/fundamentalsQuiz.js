import React from 'react';
import GraphUI from './GraphUI';

const QuizPage = () => {
  const introText = "Test your JS Fundamentals concepts knowledge. Click 'next' to start";

  return (
    <main>
      <h2>JS Fundamentals Quiz</h2>
      <GraphUI
        graph_path="/data/graph/fundamentals"
        question_set_path="/data/questions/fundamentals"
        intro_text={introText}
      />
    </main>
  )
};

export default QuizPage;
