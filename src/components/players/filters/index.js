import React from 'react';

import { YEARS, POSITIONS } from 'enums';
import Filter from 'components/_shared/filter';

import styles from './index.module.scss';

const randomArray = [
  { value: 'a', label: 'a' },
  { value: 'b', label: 'b' },
  { value: 'c', label: 'c' },
];

const Filters = () => {
  return (
    <div className={styles.container}>
      <Filter array={YEARS} />
      <Filter array={POSITIONS} />
    </div>
  );
};

export default Filters;
