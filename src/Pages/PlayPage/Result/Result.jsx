import s from './result.module.scss';

const Result = ({ correct, step }) => {
  return (
    <div className={s.result}>
      <h2 className={s.result__title}>Конец Раунда</h2>
      <p className={s.result__stats}>
        Отгаданно: {correct} ответов из {step}
      </p>
      <ul>
        <li className={s.result__item}>
          <a href="/play">Список Раундов</a>
        </li>
        <li className={s.result__item}>
          <a href="/play">Угадай Мелодию</a>
        </li>
      </ul>
    </div>
  );
};

export default Result;
