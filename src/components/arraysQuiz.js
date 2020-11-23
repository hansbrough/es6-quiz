import React from 'react';
import GraphUI from './GraphUI';

const QuizPage = () => {
  const introText = "Test your knowledge about Arrays in Javascript. Click 'next' to start";

  return (
    <main>
      <h2>JS Arrays Quiz</h2>
      <GraphUI
        graph_path="/data/graph/arrays"
        question_set_path="/data/questions/arrays"
        intro_text={introText}
      />
    </main>
  )
};

export default QuizPage;
