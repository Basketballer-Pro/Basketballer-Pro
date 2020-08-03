import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './table.module.scss';

const Table = ({ array, isTotalStats, result }) => {
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          {array.map(({ title }) => {
            return <th key={title}>{title}</th>;
          })}
        </tr>
        <tr
          className={classnames(
            styles.table,
            isTotalStats ? styles.totalStats : styles.games
          )}
        >
          {array.map(({ title, value }) => {
            const val =
              parseInt(value) === -1 ? (
                <div className={styles.invalid}>-</div>
              ) : (
                value
              );

            return (
              <td key={title}>
                {title === 'result' ? (
                  <>
                    <span className={result === 'W' ? styles.won : styles.lost}>
                      {result}
                    </span>
                    {val}
                  </>
                ) : (
                  val
                )}
              </td>
            );
          })}
        </tr>
      </tbody>
    </table>
  );
};

Table.propTypes = {
  array: PropTypes.array.isRequired,
  isTotalStats: PropTypes.bool,
  result: PropTypes.oneOf(['W', 'L']),
};

Table.defaultProps = {
  isTotalStats: false,
  result: null,
};

export default Table;
