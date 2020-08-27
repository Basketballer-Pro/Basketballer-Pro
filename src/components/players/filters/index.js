import React from 'react';

import Filter from 'components/_shared/filter';

import styles from './index.module.scss';

const Filters = () => {
  return (
    <div className={styles.filters}>
      <Filter />
    </div>
  );
};

export default Filters;
