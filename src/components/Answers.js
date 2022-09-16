import React from 'react';

function Answers(props) {
  const { answers, forCorrect } = props;
  const getFilteredAnswers = answers.filter((answer) => (
    forCorrect ? answer.correct : !answer.correct));
  return (
    <div>
      <h2>
        {forCorrect ? 'Correct ' : 'Wrong '}
        Answers Are
      </h2>
      <table className="Table">
        <thead>
          <tr>
            <th className="TableHeaderRow">No</th>
            <th className="TableHeaderRow">Question</th>
            <th className="TableHeaderRow">Response</th>
            <th className="TableHeaderRow">Answer</th>
          </tr>
        </thead>
        <tbody>
          {getFilteredAnswers.map((filteredAnswer) => (
            <tr key={filteredAnswer.id}>
              <td
                className="TableHeaderRow"
              >
                {filteredAnswer.id}
              </td>
              <td
                className="TableHeaderRow"
              >
                {filteredAnswer.question}
              </td>
              <td
                className="TableHeaderRow"
              >
                {filteredAnswer.givenAnswer === '' ? 'NA' : filteredAnswer.givenAnswer}
              </td>
              <td
                className="TableHeaderRow"
              >
                {filteredAnswer.answer}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default Answers;
