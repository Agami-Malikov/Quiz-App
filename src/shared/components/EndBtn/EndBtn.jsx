import s from '../PrevBtn/prevBtn.module.scss';

const EndBtn = ({ endGameBtnHandler, text }) => {
  return (
    <button className={s.button} onClick={endGameBtnHandler} type="button">
      {text}
    </button>
  );
};

export default EndBtn;