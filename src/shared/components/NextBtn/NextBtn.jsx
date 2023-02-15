import s from './nextBtn.module.scss';
import style from '../PrevBtn/prevBtn.module.scss';

const NextBtn = ({ nextQuestion, text }) => {
  return (
    <button className={`${style.button} ${s.button}`} onClick={nextQuestion} type="button">
      {text}
      <span className={`${style.button__arrow} ${s.button__arrow}`}></span>
    </button>
  );
};

export default NextBtn;
