import React from 'react';

import Filter from 'components/_shared/filter';
import { YEARS, POSITIONS } from 'enums';

import styles from './index.module.scss';

const Filters = () => {
  return (
    <div className={styles.container}>
      <Filter category={YEARS} />
      <Filter category={POSITIONS} />
    </div>
  );
};

export default Filters;
