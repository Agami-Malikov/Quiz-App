import questions from 'data/questions';
import s from './result.module.scss'

const Result = ({correct}) => {
  return (
    <>
      <p className={s.style}>Конец Раунда</p>
      <p>Отгаданно: {correct} ответов из {questions.length}</p>
      {/* <p>
        Победитель:
        <span>Поздравляем</span>
      </p> */}
      <a href="/play">
        Начать новую игру
      </a>
    </>
  );
};

export default Result;
