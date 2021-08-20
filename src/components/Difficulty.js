import './Difficulty.css';
import React from 'react';

const Difficulty = (props) => {
  function styleDifficulty(id) {
    return props.difficulty === id
      ? { backgroundColor: 'green' }
      : { backgroundColor: 'red' };
  }

  return (
    <div className="difficulty">
      <div className="difficulty__content">
        <button
          className="difficulty__button"
          style={styleDifficulty('easy')}
          onClick={() => props.onClick('easy')}
        >
          Easy
        </button>

        <button
          className="difficulty__button"
          style={styleDifficulty('medium')}
          onClick={() => props.onClick('medium')}
        >
          Medium
        </button>
        <button
          className="difficulty__button"
          style={styleDifficulty('hard')}
          onClick={() => props.onClick('hard')}
        >
          Hard
        </button>
      </div>
    </div>
  );
};

export default Difficulty;
