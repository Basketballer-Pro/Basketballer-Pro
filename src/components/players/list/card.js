import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Modal from 'react-modal';
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
    first_name,
    height_ft,
    height_in,
    jersey_number,
    last_name,
    person_id,
    position_full,
    weight_lbs,
  },
}) => {
  const isSelected = person_id === selectedPlayerId;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div
      onClick={() => {
        history.push(`/${urlName}/players/${person_id}`);
        getSelectedPlayer(player);
      }}
      className={classnames(
        styles.playerCard,
        isSelected && styles.selectedCard
      )}
    >
      <button onClick={() => setModalIsOpen(true)}>open modal</button>
      <Modal isOpen={modalIsOpen}>
        <h3>modal title</h3>
        <div>modal body</div>
      </Modal>
      <div className={styles.imageContainer}>
        <img
          src={
            person_id ? formatPlayerPhotoUrl(teamId, person_id) : placeholderImg
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
            <div className={styles.number}>{jersey_number}</div>
            <div className={styles.details}>
              <div className={styles.name}>
                {first_name} {last_name}
              </div>
              <div className={styles.position}>
                {position_full.replace('-', ' - ')}
              </div>
              <div className={styles.size}>
                {height_ft}&apos; {height_in}, {weight_lbs} lbs
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
};

Card.defaultProps = {
  history: null,
  selectedPlayerId: null,
};

export default withRouter(Card);
