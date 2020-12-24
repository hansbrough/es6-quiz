import React from 'react';
import GraphUI from './GraphUI';

const QuizPage = () => {
  const introText = "Test your JS Sets knowledge. Click 'next' to start";

  return (
    <main>
      <h2>JS Sets Quiz</h2>
      <GraphUI
        graph_path="/data/graph/sets"
        question_set_path="/data/questions/sets"
        intro_text={introText}
      />
    </main>
  )
};

export default QuizPage;
