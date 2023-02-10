import AddUserForm from 'components/AddUserForm.jsx/AddUserForm';
import s from './playPage.module.scss';
import UserList from 'shared/components/UserList/UserList';
import questions from 'data/questions';
import { addUser } from 'redux/items/items-operations';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useSound from 'use-sound';
import fail from '../../assets/sounds/word-quiz/fail.mp3';
import win from '../../assets/sounds/word-quiz/win.mp3';
import Game from './Game/Game';
import Result from './Result/Result';

// console.log(questions);

const PlayPage = () => {
  const dispatch = useDispatch();

  const [play, setPlay] = useState(false);
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [timerActive, setTimerActive] = useState(false);
  const [timerClass, setTimerClass] = useState(s.game__timer);
  const [failSound] = useSound(fail);
  const [winSound] = useSound(win);

  useEffect(() => {
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 1000, seconds - 1);
    } else {
      setTimerActive(false);
    }
  }, [seconds, timerActive]);

  const question = questions[step];

  const onClickVariant = idx => {
    setTimerActive(prev => !prev);
    if (idx === question.correct) {
      setCorrect(correct + 1);
      setTimerClass(`${s.game__timer}  ${s.game__timerValid}`);
      winSound();
    } else {
      setTimerClass(`${s.game__timer}  ${s.game__timerInvalid}`);
      failSound();
    }
  };

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

  const onAddUser = data => {
    const action = addUser(data);
    dispatch(action);
  };

  const timerHandler = () => {
    setTimerActive(prev => !prev);
  };

  return (
    <>
      <section className={s.game}>
        <div className={s.game__window}>
          <div className="container">
            <div className={s.game__info}>
              <UserList />
              <AddUserForm onSubmit={onAddUser} />
            </div>
          </div>
          {!play ? (
            <div className={s.game__startBox} onClick={timerHandler}>
              <button className={s.game__startBtn} onClick={startGameHandler}>
                Начать игру <span className={s.game__startIcon}></span>
              </button>
            </div>
          ) : (
            <div className={s.game__box}>
              {step !== questions.length ? (
                <>
                  <Game
                    question={question}
                    onClickVariant={onClickVariant}
                    step={step}
                    prevQuestion={prevQuestion}
                    nextQuestion={nextQuestion}
                  />
                  <div className={timerClass}>{seconds}</div>
                </>
              ) : (
                <Result correct={correct} />
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PlayPage;
