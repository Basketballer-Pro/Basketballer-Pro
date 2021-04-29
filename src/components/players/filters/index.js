import React, { useState } from 'react';
import classnames from 'classnames';
import Select from 'react-select';

import Filter from 'components/_shared/filter';
import { YEARS, POSITIONS } from 'enums';

import styles from './index.module.scss';

const Filters = () => {
  const [isUpdated, setUpdate] = useState(false);
  const [valueB, setValueB] = useState(null);

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
      <Select
        onChange={() => {
          setValueB(null);
        }}
        options={[
          { value: 1, label: 'one' },
          { value: 2, label: 'two' },
        ]}
      />
      <Select
        value={valueB}
        onChange={(option) => setValueB(option)}
        options={[
          { value: 3, label: 'three' },
          { value: 4, label: 'four' },
        ]}
      />
    </div>
  );
};

export default Filters;
