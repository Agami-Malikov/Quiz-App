import s from './nextBtn.module.scss';
import style from '../PrevBtn/prevBtn.module.scss';

const NextBtn = ({ nextQuestion, text }) => {
  return (
    <button className={style.button} onClick={nextQuestion} type="button">
      {text}
      <span className={s.button__arrow}></span>
    </button>
  );
};

export default NextBtn;
