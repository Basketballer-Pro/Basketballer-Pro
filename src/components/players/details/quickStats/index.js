import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Spinner from 'components/_shared/spinner';

import styles from './index.module.scss';

const QuickStats = ({ quickStats, teamColor, isLoading }) => {
  return (
    <section className={styles.quickStats}>
      {quickStats.map(({ title, value }) => {
        const hasNullValue = parseInt(value) === -1;

        return (
          <div key={title} className={styles.container}>
            <div
              style={{ backgroundColor: teamColor }}
              className={styles.header}
            >
              {title}
            </div>
            {isLoading ? (
              <Spinner isLoading={isLoading} />
            ) : (
              <div
                className={classnames(
                  styles.data,
                  hasNullValue && styles.invalid
                )}
              >
                {hasNullValue ? '-' : value}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

QuickStats.propTypes = {
  quickStats: PropTypes.array.isRequired,
  teamColor: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default QuickStats;
