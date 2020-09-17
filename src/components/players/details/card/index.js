import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import placeholderImg from 'assets/imgs/placeholder.png';
import { formatPlayerPhotoUrl } from 'utils/stringUtils';

import styles from './index.module.scss';

const Card = ({
  player: {
    personId,
    firstName,
    lastName,
    jersey,
    teamSitesOnly,
    pos,
    heightFeet,
    heightInches,
    selectedYear,
    weightPounds,
  },
  playerTeamId,
  isSticky,
  isAnimated,
  teamColor,
}) => (
  <>
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={formatPlayerPhotoUrl(playerTeamId, personId, selectedYear)}
          alt="player headshot"
          onError={(e) => (e.target.src = placeholderImg)}
        />
      </div>
    </div>
    <div
      className={classnames(
        styles.card,
        styles.cardWrapper,
        isSticky && styles.borderBottom
      )}
    >
      <div style={{ borderColor: teamColor }} className={styles.imageLine} />
      <div className={styles.detailsContainer}>
        <div className={styles.infoContainer}>
          <div
            className={classnames(
              styles.thumb,
              isAnimated && styles.transition,
              isSticky && styles.animate
            )}
          >
            <img
              src={formatPlayerPhotoUrl(playerTeamId, personId, selectedYear)}
              alt="player headshot"
              onError={(e) => (e.target.src = placeholderImg)}
            />
          </div>
          <div className={styles.info}>
            <div className={styles.playerName}>
              {firstName} {lastName}
            </div>
            <div className={styles.playerPosition}>
              {teamSitesOnly ? teamSitesOnly.posFull : pos}
            </div>
            <div className={styles.playerDetails}>
              {heightFeet}&apos; {heightInches}, {weightPounds} lbs
            </div>
          </div>
        </div>
        <div style={{ color: teamColor }} className={styles.playerNumber}>
          {jersey}
        </div>
      </div>
    </div>
  </>
);

Card.propTypes = {
  player: PropTypes.object.isRequired,
  playerTeamId: PropTypes.string.isRequired,
  teamColor: PropTypes.string.isRequired,
  selectedYear: PropTypes.number.isRequired,
  isSticky: PropTypes.bool.isRequired,
  isAnimated: PropTypes.bool.isRequired,
};

export default Card;
