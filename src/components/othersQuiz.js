import React from 'react';
import GraphUI from './GraphUI';

const QuizPage = () => {
  const introText = "Test your JS knowledge. Click 'next' to start";

  return (
    <main>
      <h2>JS Quiz</h2>
      <GraphUI
        graph_path="/data/graph/other"
        question_set_path="/data/questions/other"
        intro_text={introText}
      />
    </main>
  )
};

export default QuizPage;
