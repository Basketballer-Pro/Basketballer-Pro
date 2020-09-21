import React from 'react';

import { YEARS, POSITIONS } from 'enums';
import Filter from 'components/_shared/filter';

import styles from './index.module.scss';

const Filters = () => {
  return (
    <div className={styles.container}>
      <Filter array={YEARS} />
      <Filter array={POSITIONS} />
    </div>
  );
};

export default Filters;
