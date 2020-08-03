import React from 'react';
import PropTypes from 'prop-types';

import Spinner from 'components/_shared/spinner';
import Table from 'components/_shared/table';
import Title from 'components/_shared/title';

import styles from './index.module.scss';

const TotalStats = ({ totalStats, teamColor, isLoading }) => {
  return (
    <section className={styles.totalStats}>
      <Title title="stats" teamColor={teamColor} />
      {isLoading ? (
        <Spinner isLoading={isLoading} containerHeight={43} />
      ) : (
        <Table
          array={totalStats}
          section="totalStats"
          teamColor={teamColor}
          isLoading={isLoading}
        />
      )}
    </section>
  );
};

TotalStats.propTypes = {
  totalStats: PropTypes.array.isRequired,
  teamColor: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default TotalStats;
