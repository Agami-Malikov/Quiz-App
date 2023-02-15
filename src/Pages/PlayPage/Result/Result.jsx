import questions from 'data/questions';
import s from './result.module.scss'

const Result = ({correct}) => {
  return (
    <div className={s.result}>
      <h2 className={s.result__title}>Конец Раунда</h2>
      <p className={s.result__stats}>
        Отгаданно: {correct} ответов из {questions.length}
      </p>
      {/* <p>
        Победитель:
        <span>Поздравляем</span>
      </p> */}
      <ul>
        <li className={s.result__item}>
          <a href="/play">Начать новую игру</a>
        </li>
        <li className={s.result__item}>
          <a href="/play">Угадай Мелодию</a>
        </li>
      </ul>
    </div>
  );
};

export default Result;
