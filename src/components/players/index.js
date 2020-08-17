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
    window.removeEventListener('rezise', handleResize);
  }, []);

  console.log('size :', size);

  return (
    <>
      <Filters />
      <div className={styles.container}>
        <List isMobilePortrait={size < 521} />
        <Route path={path || `${path}/:playerId`}>
          <Details isMobilePortrait={size < 521} />
        </Route>
      </div>
    </>
  );
};

export default PlayersPage;
