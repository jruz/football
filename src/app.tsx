import React, { FC, Suspense, lazy, useState } from 'react';

const Teams = lazy(() => import('./teams/index'));
const Conferences = lazy(() => import('./conferences/index'));

const pages = ['teams', 'conferences'];

const getPage = (page: string) => {
  switch (page) {
    case 'teams': {
      return <Teams />;
    }
    case 'conferences': {
      return <Conferences />;
    }
    default:
  }
};

const capitalize = (name: string) =>
  name.substring(0, 1).toUpperCase() + name.substring(1);

const Fallback = () => <p>Loading...</p>;

const App: FC = () => {
  const [page, setPage] = useState(pages[0]);

  return (
    <section className="columns">
      <aside className="column is-one-fifth">
        <div className="menu">
          <p className="menu-label">Navigation</p>
          <ul className="menu-list">
            {pages.map((name) => (
              <li key={name}>
                <a
                  className={name === page ? 'is-active' : ''}
                  onClick={() => setPage(name)}
                >
                  {capitalize(name)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <main className="column">
        <Suspense fallback={<Fallback />}>{getPage(page)}</Suspense>
      </main>
    </section>
  );
};

export default App;
