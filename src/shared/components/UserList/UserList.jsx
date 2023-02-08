import s from './userList.module.scss';
import { fetchUsers, removeUser } from 'redux/items/items-operations';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getItems } from 'redux/items/selectors';

const UserList = () => {
  const onRemoveUser = id => {
    dispatch(removeUser(id));
  };

  const dispatch = useDispatch();

  const users = useSelector(getItems);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const elements = users.map(({ id, name, points, rank }) => (
    <li className={s.userList__item} key={id}>
      {/* <img src={avatar} alt="user avatar" /> */}
      <p className={s.userList__name}>{name}</p>
      <p className={s.userList__points}>Очков: {points}</p>
      <p className={s.userList__rank}>Ранг: {rank}</p>
      <button
        className={s.userList__btn}
        onClick={() => onRemoveUser(id)}
        type="button"
      >
        Удалить X
      </button>
    </li>
  ));

  return <ul className={s.userList}>{elements}</ul>;
};

export default UserList;
