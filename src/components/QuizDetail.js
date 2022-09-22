import React from 'react';
import {
  MAX_LIMIT, MIN_LIMIT, QUESTIONS_COUNT, TIMER_LIMIT,
} from '../utils/Constants';
import '../stylesheet/Quiz.css';

function QuizDetail() {
  return (
    <div>
      Details Of Quiz
      <div className="QuizDetail">
        <div>
          <div className="QuizDetailText">
            Min Limit:
            {' '}
            {MIN_LIMIT}
          </div>
          <div className="QuizDetailText">
            Timer:
            {' '}
            {TIMER_LIMIT}
          </div>
        </div>
        <div>
          <div className="QuizDetailText">
            Max Limit:
            {' '}
            {MAX_LIMIT}
          </div>
          <div className="QuizDetailText">
            Question Count:
            {' '}
            {QUESTIONS_COUNT}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizDetail;
