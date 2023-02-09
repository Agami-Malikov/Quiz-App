import s from './game.module.scss';
import questions from 'data/questions';

import { useState } from 'react';
import { computeHeadingLevel } from '@testing-library/react';

// console.log(questions);

const Game = () => {
  const [step, setStep] = useState(0);

  const question = questions[step];

  const onClickVariant = idx => {
    console.log(step, idx);
    setStep(step +1);
  };

  return (
    <div className="container">
      <div className={s.questions}>
        <h1 className={s.questions__title}>{question.title}</h1>
        <ul className={s.questions__list}>
          {question.variants.map((variant, idx) => (
            <li
              className={s.questions__item}
              key={idx}
              onClick={() => onClickVariant(idx)}
            >
              {variant}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Game;
