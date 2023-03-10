// import questions from 'data/questions';
import s from './game.module.scss';
import win from '../../../assets/sounds/word-quiz/win.mp3';
import fail from '../../../assets/sounds/word-quiz/fail.mp3';

import useSound from 'use-sound';

import { useState, useEffect } from 'react';
import PrevBtn from 'shared/components/PrevBtn/PrevBtn';
import NextBtn from 'shared/components/NextBtn/NextBtn';
import StartGameButton from 'shared/components/StartGameButton/StartGameButton';
import Result from '../Result/Result';
import EndBtn from 'shared/components/EndBtn/EndBtn';

const Game = ({ questions }) => {
  const lastQuestions = questions.length - 1;
  // console.log(questions[0].correct);

  const [play, setPlay] = useState(false);
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [timerActive, setTimerActive] = useState(false);
  const [timerClass, setTimerClass] = useState(s.game__timer);

  const [failSound] = useSound(fail);
  const [winSound] = useSound(win);

  const ansverDetails = questions.map(({ details }) => details);
  const questionsLength = questions.map(({ variants }) => variants.length);

  useEffect(() => {
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 1000, seconds - 1);
    } else if (seconds === 0) {
      setTimerClass(`${s.game__timer}  ${s.game__timerInvalid}`);
      failSound();
    } else {
      setTimerActive(false);
    }
    // eslint-disable-next-line
  }, [seconds, timerActive]);

  const nextQuestion = () => {
    setStep(step + 1);
    setTimerActive(true);
    setSeconds(10);
    setTimerClass(s.game__timer);
  };

  const prevQuestion = () => {
    prompt('Вы действительно хотите вернуться к прошлому вопросу?', 'Да');
    setStep(step - 1);
  };

  const endGameBtnHandler = () => {
    setTimerActive(false);
    setStep(step + 1);
  };

  const startGameHandler = () => {
    setPlay(prev => !prev);
  };

  const timerHandler = () => {
    setTimerActive(prev => !prev);
  };

  const onClickVariant = idx => {
    setTimerActive(prev => !prev);
    const correctAnsv = questions.map(({ correct }) => correct);
    if (idx === correctAnsv[step]) {
      setCorrect(correct + 1);
      setTimerClass(`${s.game__timer}  ${s.game__timerValid}`);
      winSound();
    } else {
      setTimerClass(`${s.game__timer}  ${s.game__timerInvalid}`);
      failSound();
    }
  };

  const cls =
    questionsLength[step] === 4 ? s.game__list : s.game__listSingleItem;
  const clsItem =
    questionsLength[step] === 4 ? s.game__item : s.game__singleItem;

  const questionList = questions.map(({ title, variants }, idx) => (
    <>
      <h1 className={s.game__title} key={idx}>
        {title}
      </h1>
      <ul className={cls} key={idx + 1}>
        {variants.map((variant, idx) => (
          <li className={clsItem} key={idx} onClick={() => onClickVariant(idx)}>
            {variant}
          </li>
        ))}
      </ul>
    </>
  ));

  return (
    <div className="container">
      {!play ? (
        <StartGameButton
          timerHandler={timerHandler}
          startGameHandler={startGameHandler}
        />
      ) : (
        <div className={s.game}>
          {step !== questions.length ? (
            <>
              {questionList[step]}

              <div className={timerClass}>{seconds}</div>

              <div className={s.game__btns}>
                {step === 0 ? (
                  ''
                ) : (
                  <PrevBtn
                    prevQuestion={prevQuestion}
                    text="Предыдущий Вопрос"
                  />
                )}
                {step !== lastQuestions ? (
                  <NextBtn
                    nextQuestion={nextQuestion}
                    text="Cледующий Вопрос"
                  />
                ) : (
                  <EndBtn
                    endGameBtnHandler={endGameBtnHandler}
                    text="Результат"
                  />
                )}
              </div>
              {seconds === 0 || !timerActive ? (
                <p className={s.game__details}>{ansverDetails[step]}</p>
              ) : (
                ''
              )}
            </>
          ) : (
            <Result correct={correct} step={step} />
          )}
        </div>
      )}
    </div>
  );
};

export default Game;
