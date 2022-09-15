import React from 'react';
import '../stylesheet/Quiz.css';

function QuizDetail() {
  return (
    <div>
      Details Of Quiz
      <div className="QuizDetail">
        <div>
          <div className="QuizDetailText">Min Limit: 1</div>
          <div className="QuizDetailText">Timer: 20</div>
        </div>
        <div>
          <div className="QuizDetailText">Max Limit: 20</div>
          <div className="QuizDetailText">Question Count: 20</div>
        </div>
      </div>
    </div>
  );
}

export default QuizDetail;
