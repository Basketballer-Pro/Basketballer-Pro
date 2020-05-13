import React from 'react';
import { connect } from 'react-redux';

import classnames from 'classnames';

import { getPlayers, getSelectedPlayer } from '../../../actions/actions.js';

import placeholderImg from '../../../assets/imgs/placeholder.png';
import styles from './index.module.scss';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedId: null,
        };
    };

    componentDidMount() {
        this.props.getPlayers();
    };

    renderPlayers() {
        const { players, selectedTeam } = this.props;

        console.log(selectedTeam);

        return players.map((player, index) => {
            const isSelected = this.state.selectedId === player.person_id;

            return (
                <div
                    key={index}
                    onClick={() => {
                        this.setState({ selectedId: player.person_id })
                        this.props.getSelectedPlayer(player);
                    }}
                    className={classnames(styles.playerCard, isSelected ? styles.selectedCard : null)}
                >
                    <div className={styles.imageContainer}>
                        <img
                            src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/${selectedTeam.teamId}/2019/260x190/${player.person_id}.png`}
                            onError={(e) => e.target.src = placeholderImg}
                            alt="Player Headshot"
                        />
                    </div>
                    <div className={styles.imageLine} />
                    <div className={styles.detailsContainer}>
                        <div className={styles.number}>{player.jersey_number}</div>
                        <div className={styles.details}>
                            <div className={styles.name}>{player.first_name} {player.last_name}</div>
                            <div className={styles.position}>{player.position_full}</div>
                            <div className={styles.size}>{player.height_ft}-{player.height_in}, {player.weight_lbs} lbs</div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    render() {
        return (
            <div className={styles.playersListContainer}>
                {this.renderPlayers()}
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return { players: state.players, selectedTeam: state.selectedTeam };
}

export default connect(mapStateToProps,
        {
            getPlayers,
            getSelectedPlayer,
        }
)(List);