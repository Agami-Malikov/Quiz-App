// import questions from 'data/questions';
import s from './game.module.scss';
import win from '../../../assets/sounds/word-quiz/win.mp3';
import fail from '../../../assets/sounds/word-quiz/fail.mp3';

import useSound from 'use-sound';

import { useState, useEffect } from 'react';

const Game = ({questions}) => {
  const lastQuestions = questions.length - 1;
  const [play, setPlay] = useState(false);
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [timerActive, setTimerActive] = useState(false);
  const [timerClass, setTimerClass] = useState(s.game__timer);
  const [failSound] = useSound(fail);
  const [winSound] = useSound(win);
console.log(questions);
  useEffect(() => {
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 1000, seconds - 1);
    } else if (seconds === 0) {
      setTimerClass(`${s.game__timer}  ${s.game__timerInvalid}`);
      // failSound();
    } else {
      setTimerActive(false);
    }
    // eslint-disable-next-line
  }, [seconds, timerActive]);

  const nextQuestion = () => {
    setStep(step + 1);
    setSeconds(10);
    setTimerActive(prev => !prev);
    setTimerClass(s.game__timer);
  };

  const prevQuestion = () => {
    prompt('Вы действительно хотите вернуться к прошлому вопросу?', 'Да');
    setStep(step - 1);
  };

  const startGameHandler = () => {
    setPlay(prev => !prev);
  };

  const timerHandler = () => {
    setTimerActive(prev => !prev);
  };

  const onClickVariant = idx => {
    setTimerActive(prev => !prev);
    if (idx === questionList.correct) {
      setCorrect(correct + 1);
      setTimerClass(`${s.game__timer}  ${s.game__timerValid}`);
      winSound();
    } else {
      setTimerClass(`${s.game__timer}  ${s.game__timerInvalid}`);
      // failSound();
    }
  };

  const questionList = questions.map(({ title }, idx) => (
    <>
      <h1 className={s.game__title} key={idx}>
        {title}
      </h1>
      <ul className={s.game__list} key={idx + 1}>
        {questions[step].variants.map((variants, idx) => (
          <li
            className={s.game__item}
            key={idx}
            onClick={() => onClickVariant(idx)}
          >
            {variants}
          </li>
        ))}
      </ul>
    </>
  ));

  console.log(questionList);
  return (
    <div className="container">
      <div className={s.game}>
        {questionList[step]}
        <div className={timerClass}>{seconds}</div>
        <div className={s.game__btns}>
          {step === 0 ? (
            ''
          ) : (
            <button
              className={s.game__button}
              onClick={prevQuestion}
              type="button"
            >
              <span className={s.game__arrow}></span>
              Предыдущий Вопрос
            </button>
          )}
          {step !== lastQuestions ? (
            <button
              className={s.game__Nextbutton}
              onClick={nextQuestion}
              type="button"
            >
              <span className={s.game__Nextarrow}></span>
              Следующий Вопрос
            </button>
          ) : (
            <button
              className={s.game__endBtn}
              onClick={nextQuestion}
              type="button"
            >
              Результат
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;
