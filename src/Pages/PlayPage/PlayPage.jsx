import s from './playPage.module.scss';

import AddUserForm from 'components/AddUserForm.jsx/AddUserForm';
import UserList from 'shared/components/UserList/UserList';

import { addUser } from 'redux/items/items-operations';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import GameRoundsPage from 'Pages/GameRoundsPage/GameRoundsPage';
import Game from './Game/Game';

const PlayPage = () => {
  const dispatch = useDispatch();

  const onAddUser = data => {
    const action = addUser(data);
    dispatch(action);
  };

  return (
    <>
      <section className={s.game}>
        <div className={s.game__window}>
          <div className="container">
            <div className={s.game__info}>
              <UserList />
              <GameRoundsPage />
              <AddUserForm onSubmit={onAddUser} />
            </div>
          </div>
        </div>
        <Outlet />
      </section>
    </>
  );
};

export default PlayPage;
