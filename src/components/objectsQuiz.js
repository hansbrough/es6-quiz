import React from 'react';
import GraphUI from './GraphUI';

const QuizPage = () => {
  const introText = "Test your knowledge about Objects in Javascript. Click 'next' to start";

  return (
    <main>
      <h2>JS Objects Quiz</h2>
      <GraphUI
        graph_path="/data/graph/objects"
        question_set_path="/data/questions/objects"
        intro_text={introText}
      />
    </main>
  )
};

export default QuizPage;
