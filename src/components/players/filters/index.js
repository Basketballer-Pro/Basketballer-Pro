import React from 'react';
import { connect } from 'react-redux';

import { YEARS, POSITIONS } from 'enums';
import Filter from 'components/_shared/filter';

import styles from './index.module.scss';

const Filters = (props) => {
  const { dispatch } = props;
  return (
    <div className={styles.container}>
      <Filter dispatch={dispatch} array={YEARS} />
      <Filter dispatch={dispatch} array={POSITIONS} />
    </div>
  );
};

export default connect()(Filters);
