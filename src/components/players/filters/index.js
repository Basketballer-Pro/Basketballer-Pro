import React, { useState } from 'react';
import classnames from 'classnames';

import Filter from 'components/_shared/filter';
import { YEARS, POSITIONS } from 'enums';

import styles from './index.module.scss';

const Filters = () => {
  const [isUpdated, setUpdate] = useState(false);

  const beenUpdated = () => {
    setUpdate(true);
  };

  return (
    <div
      className={
        (styles.container,
        classnames(styles.container, isUpdated && styles.fuck))
      }
    >
      <Filter
        typeOfMenu="years"
        menuHasChanged={null}
        update={() => beenUpdated()}
        category={YEARS}
      />
      <Filter
        typeOfMenu="Position"
        menuHasChanged={isUpdated}
        update={() => beenUpdated()}
        category={POSITIONS}
      />
    </div>
  );
};

export default Filters;
