import s from './prevBtn.module.scss';

const PrevBtn = ({ prevQuestion,text }) => {
  return (
    <button className={s.button} onClick={prevQuestion} type="button">
      {text}
      <span className={s.button__arrow}></span>
    </button>
  );
};

export default PrevBtn;
