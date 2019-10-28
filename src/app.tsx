import React, { FC, Suspense, lazy, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import style from './app.scss';
import { setPage } from './actions';
import Loading from './shared/loading';
import { StateT } from './reducer';

const Teams = lazy(() => import('./teams/index'));
const Conferences = lazy(() => import('./conferences/index'));

const pages = ['teams', 'conferences'];

const getPage = (page: string | null) => {
  switch (page) {
    case 'teams': {
      return <Teams />;
    }
    case 'conferences': {
      return <Conferences />;
    }
    default:
      return 'teams';
  }
};

const capitalize = (name: string) =>
  name.substring(0, 1).toUpperCase() + name.substring(1);

const App: FC = () => {
  const page = useSelector(({ page }: StateT) => page);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage('teams'));
  }, []);

  const onClick = (name: string) => {
    dispatch(setPage(name));
  };

  return (
    <section className={`columns ${style.app}`}>
      <aside className={`column is-one-fifth ${style.sidebar}`}>
        <div className="menu">
          <p className="menu-label">Navigation</p>
          <ul className="menu-list">
            {pages.map((name) => (
              <li key={name}>
                <a
                  className={name === page ? 'is-active' : ''}
                  onClick={() => onClick(name)}
                >
                  {capitalize(name)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <main className={`column ${style.main}`}>
        <Suspense fallback={<Loading />}>{getPage(page)}</Suspense>
      </main>
    </section>
  );
};

export default App;
