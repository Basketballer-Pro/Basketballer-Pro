import React, { useState, useEffect } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import List from './list';
import Details from './details';
import Filters from './filters';

import styles from './index.module.scss';

const PlayersPage = () => {
  const { path } = useRouteMatch();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
  }, [screenWidth]);

  return (
    <>
      <Filters />
      <div className={styles.container}>
        <List screenWidth={screenWidth} />
        <Route path={path || `${path}/:playerId`}>
          <Details screenWidth={screenWidth} />
        </Route>
      </div>
    </>
  );
};

export default PlayersPage;
