import React from 'react';
import ReactMarkdown from 'react-markdown';

const Summary = ({correctResponses, inCorrectResponses}) => {
  //console.log("Summary: inCorrectResponses:",inCorrectResponses);

  //
  const unique = (categories, accumulator={}) => {
    //console.log("unique");
    categories && categories.forEach(category => {
      //console.log(".category:",category);
      for (const [key, arr] of Object.entries(category)) {
        //console.log(`..${key}: ${arr}`);
        arr.forEach(item => {
          //console.log("...item.criterion:",item.criterion)
          if(!accumulator[item.criterion]) {
            accumulator[item.criterion] = {}
          }

          if(!accumulator[item.criterion][key]) {
            accumulator[item.criterion][key] = [item];
          } else {
            accumulator[item.criterion][key].push(item)
          }
        });
      }
    });
    return accumulator;
  }

  //
  const makeSummaryRows = (data) => {
    return Object.entries(data).map(item => {
      const [key,val] = item;
      const {correct=[], incorrect=[]} = val;
      const knowIt = correct.length > 0 && incorrect.length === 0;
      return (
        <tr key={key}>
          <td>{key}</td>
          <td>{knowIt && <img src="/mini-checkcircle.svg" alt="check mark" />}</td>
          <td>{correct.length}</td>
          <td>{incorrect.length}</td>
        </tr>
      )
    })
  }

  // given a question object determine 'advice' to return
  const makeQuestionFollowupAdvice = (question) => {
    //console.log("makeQuestionFollowupAdvice:",question);
    const topics = question.labels.find(label => label.qid === question.answerId).topics;
    //console.log("...topics:",topics);
    return topics && topics.map(topic => {
      let description;
      switch(topic) {
        case 'boundry':
          description = `An index used is out of bounds.`
          break;
        case 'categorization':
          description = `Learn more about how methods are grouped into categories of similar functionality.`
          break;
        case 'complicated':
          description = `The solution may work but is more complicated than necessary.`
          break;
        case 'deep_cloning':
          description = `The ${question.criterion}() method doesn't support deep cloning.`
          break;
        case 'different':
          description = `Wrong method. The intent of the method you chose doesn't match the task.`
          break;
        case 'generic':
          description = `The ${question.criterion}() method is intentially generic. It doesn't require it's 'this' property to be a specific built-in object.`
          break;
        case 'generic_syntax':
          description = `The syntax to call a built-in object's method generically is: [built in object name].prototype.[method name].call([this ref], args)`;
          break;
        case 'hardwired':
          description = `The solution isn't reuasable because it has a hard wired value.`
          break;
        case 'intent':
          description = `Take a second look at the intent of the ${question.criterion}() method.`
          break;
        case 'mutation':
          description = `Be sure to understand if the ${question.criterion}() method changes it's target "in place" or not.`
          break;
        case 'no_such':
          description = 'There is no such method or property of that name for this object.'
          break;
        case 'operation':
          description = `The ${question.criterion}() method doesn't operate that way.`
          break;
        case 'primitive_types':
          description = 'Be sure to understand the difference between a primitive data type and their object wrapper equivalents.';
          break;
        case 'return':
          description = `Take a second look at the expected return value for the ${question.criterion}() method.`
          break;
        case 'reference':
          description = `The original value was copied by 'reference'`
          break;
        case 'scope':
          description = `Be sure to understand scope. This determines what declared variables, functions and classes are available.`
          break;
        case 'static':
          description = `Make sure you know which methods are static. This determines how they are invoked from built in JS objects.`
          break;
        case 'syntax':
          description = `Review the correct syntax to invoke the ${question.criterion}() method.`
          break;
        default:
          description = topic;
          break;
      }
      return (<><em>Follow up:</em><p>{description}</p></>)
    });
  }

  //
  const makeStudyRows = (data) => {
    //console.log("makeStudyRows")
    return Object.entries(data).map(item => {
      const [key,val] = item;
      const {incorrect} = val;
      //console.log(key," incorrect:",incorrect);
      return incorrect && (
        <div key={key} className="review-topic-container">
          <h3 className="pill">{key}</h3>
          {incorrect && incorrect.map(item => {
            return (
              <div className="question-review-container">
                <em>Question:</em>
                <ReactMarkdown className="question-container" source={item.title} />
                <em className="answer-label">The correct answer was:</em>
                <ReactMarkdown className="answer-container" source={item.labels.find(label => label.qid === item.actual).title} />
                <em className="answer-label">You answered:</em>
                <ReactMarkdown className="answer-container" source={item.labels.find(label => label.qid === item.answerId).title} />
                {makeQuestionFollowupAdvice(item)}
              </div>
            )
          })}
        </div>
      )
    })
  }

  const criteria = unique([{incorrect: inCorrectResponses}, {correct: correctResponses}]);
  //console.log("...criteria:",criteria);

  return (
    <>
    <h4>Great work finishing the quiz!</h4>
    <div style={{marginBottom:"2rem",marginTop:"1rem"}}>You got <b>{correctResponses.length}</b> out of <b>{correctResponses.length + inCorrectResponses.length}</b> questions correct.</div>
    <table className="quiz-results">
      <thead>
        <tr><th>Topic</th><th>Know It</th><th>Correct</th><th>Incorrect</th></tr>
      </thead>
      <tbody>
        {makeSummaryRows(criteria)}
      </tbody>
    </table>
    <hr />
    <h4 style={{marginTop:"1rem"}}>Here's a break down by topic of questions you missed.</h4>
    <section className="further-review">
      {makeStudyRows(criteria)}
    </section>
    </>
  )
};

export default Summary;
