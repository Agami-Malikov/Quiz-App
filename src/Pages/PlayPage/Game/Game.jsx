import questions from 'data/questions';
import s from './game.module.scss';

const Game = ({
  question,
  onClickVariant,
  prevQuestion,
  nextQuestion,
  step,
}) => {
  const lastQuestions = questions.length - 1;

  return (
    <div className="container">
      <div className={s.questions}>
        <h1 className={s.questions__title}>{question.title}</h1>
        <ul className={s.questions__list}>
          {question.variants.map((variant, idx) => (
            <li
            aria-disabled
              className={s.questions__item}
              key={idx}
              onClick={() => onClickVariant(idx)}
            >
              {variant}
            </li>
          ))}
        </ul>
      </div>
      <div className={s.questions__btns}>
        {step === 0 ? (
          ''
        ) : (
          <button
            className={s.questions__button}
            onClick={prevQuestion}
            type="button"
          >
            <span className={s.questions__arrow}></span>
            Предыдущий Вопрос
          </button>
        )}
        {step !== lastQuestions ? (
          <button
            className={s.questions__Nextbutton}
            onClick={nextQuestion}
            type="button"
          >
            <span className={s.questions__Nextarrow}></span>
            Следующий Вопрос
          </button>
        ) : (
          <button
            className={s.questions__endBtn}
            onClick={nextQuestion}
            type="button"
          >
            Результат
          </button>
        )}
      </div>
    </div>
  );
};

export default Game;
