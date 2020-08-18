import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import placeholderImg from 'assets/imgs/placeholder.png';
import { formatPlayerPhotoUrl } from 'utils/stringUtils';

import styles from './index.module.scss';

const Card = ({
  getSelectedPlayer,
  selectedTeam: { teamColor, teamId, urlName },
  player,
  history,
  selectedPlayerId,
  player: {
    firstName,
    heightFeet,
    heightInches,
    jersey,
    lastName,
    personId,
    teamSitesOnly,
    weightPounds,
  },
  screenWidth,
}) => {
  const isSelected = personId === selectedPlayerId;

  return (
    <div
      onClick={() => {
        history.push(`/${urlName}/players/${personId}`);
        getSelectedPlayer(player);
      }}
      className={classnames(
        styles.playerCard,
        isSelected && styles.selectedCard
      )}
    >
      <div className={styles.imageContainer}>
        <img
          src={
            personId ? formatPlayerPhotoUrl(teamId, personId) : placeholderImg
          }
          alt="player headshot"
          onError={(e) => (e.target.src = placeholderImg)}
        />
      </div>
      <div style={{ borderColor: teamColor }} className={styles.imageLine} />
      <div
        style={{ backgroundColor: isSelected && teamColor }}
        className={styles.detailsContainer}
      >
        {!!Object.keys(player).length && (
          <>
            <div
              style={screenWidth <= 520 ? { color: `${teamColor}` } : null}
              className={styles.number}
            >
              {jersey}
            </div>
            <div className={styles.details}>
              <div className={styles.name}>
                {firstName} {lastName}
              </div>
              <div className={styles.position}>{teamSitesOnly.posFull}</div>
              <div className={styles.size}>
                {heightFeet}&apos; {heightInches}, {weightPounds} lbs
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  getSelectedPlayer: PropTypes.func.isRequired,
  selectedTeam: PropTypes.object.isRequired,
  player: PropTypes.object.isRequired,
  history: PropTypes.object,
  selectedPlayerId: PropTypes.string,
  screenWidth: PropTypes.number,
};

Card.defaultProps = {
  history: null,
  selectedPlayerId: null,
  screenWidth: null,
};

export default withRouter(Card);
