import React, { useState, useEffect } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import List from './list';
import Details from './details';
import Filters from './filters';

import styles from './index.module.scss';

const PlayersPage = () => {
  const { path } = useRouteMatch();
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
  }, [size]);

  return (
    <>
      <Filters />
      <div className={styles.container}>
        <List size={size} />
        <Route path={path || `${path}/:playerId`}>
          <Details size={size} />
        </Route>
      </div>
    </>
  );
};

export default PlayersPage;
