import React from 'react';
import GraphUI from './GraphUI';

const QuizPage = () => {
  const introText = "Test your JS Maps knowledge. Click 'next' to start";

  return (
    <main>
      <h2>JS Maps Quiz</h2>
      <GraphUI
        graph_path="/data/graph/maps"
        question_set_path="/data/questions/maps"
        intro_text={introText}
      />
    </main>
  )
};

export default QuizPage;
