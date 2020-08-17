import React, { useState, useEffect } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import List from './list';
import Details from './details';
import Filters from './filters';

import styles from './index.module.scss';

// function useWindowSize() {
//   const [size, setSize] = useState(window.innerWidth);
//   useEffect(() => {
//     const handleResize = () => {
//       setSize(window.innerWidth);
//     };
//     window.addEventListener('resize', handleResize);
//     window.removeEventListener('resize', handleResize);
//   }, []);
//   return size;
// }

const PlayersPage = () => {
  const { path } = useRouteMatch();

  // const { size } = useWindowSize();

  // const [isPortrait, setPortrait] = useState(null);
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    // window.removeEventListener('resize', handleResize);
  }, [size]);

  // console.log('size :', size);
  // console.log('isPortrait :', isPortrait);

  return (
    <>
      <Filters />
      <div className={styles.container}>
        {/* <div>{size}</div> */}
        <List size={size} /*isMobilePortrait={size < 521}*/ />
        <Route path={path || `${path}/:playerId`}>
          <Details /*isMobilePortrait={size < 521}*/ />
        </Route>
      </div>
    </>
  );
};

export default PlayersPage;
