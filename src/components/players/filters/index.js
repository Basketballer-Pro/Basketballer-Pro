import React from 'react';

import Filter from 'components/_shared/filter';

import styles from './index.module.scss';

const Filters = () => {
  return (
    <div className={styles.container}>
      <Filter />
      <Filter />
    </div>
  );
};

export default Filters;
