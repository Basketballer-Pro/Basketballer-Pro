// import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
// import classnames from 'classnames';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// import Chevron from 'assets/icons/chevron';
// import { getSelectedTeam, filterPlayers } from 'actions';
// import { COLORS } from 'enums';

// import selectMenuStyles from 'components/_shared/selectMenuStyles';
// import styles from './filter.module.scss';

// const Filter = ({
//   selectedTeam,
//   getSelectedTeam,
//   category,
//   filterPlayers,
//   update,
//   menuHasChanged,
//   typeOfMenu,

// }) => {

//   const isNumber = typeof category[0].value === 'number';

//   const chevron = () => (
//     <Chevron
//       color={COLORS.DARK_GREY}
//       width={10}
//       height={5}
//       className={styles.chevron}
//     />
//   );

//   const handleChange = (e) => {
//     // update();
//     if (typeof e.value === 'string') {
//       filterPlayers(e.value);
//     } else {
//       update();
//       getSelectedTeam(selectedTeam, e.value);
//     }
//   };

//   const defaultValuePlaceholder = (typeOfMenu) => {
//     if (typeOfMenu === 'years') {
//       return category[0];
//     }

//     if (typeOfMenu === 'position') {
//       return null;
//     }
//   };

//   const placeholderPlaceholder = (typeOfMenu) => {
//     if (typeOfMenu === 'years') {
//       return null;
//     }

//     if (typeOfMenu === 'position') {
//       if (menuHasChanged === true) {
//         return '2';
//       }
//       return '1';
//     }
//   };

//   return (
//     <div
//       className={styles.container}
//     >
//       <Select
//         styles={selectMenuStyles()}
//         // value={'sick a dicks'}
//         // defaultValue={isNumber ? category[0] : catPlaceholder}
//         // defaultValue={typeOfMenu === 'years' ? category[0] : null}
//         defaultValue={defaultValuePlaceholder(typeOfMenu)}
//         // placeholder={placeholderPlaceholder(typeOfMenu)}
//         // clearValue={() => void();}
//         options={category}
//         hideSelectedOptions
//         isSearchable={false}
//         components={{
//           DropdownIndicator: chevron,
//         }}
//         onChange={(e) => handleChange(e)}
//       />
//     </div>
//   );
// };

// const mapStateToProps = ({ teams, players }) => {
//   return { selectedTeam: teams.selectedTeam, players: players };
// };

// Filter.propTypes = {
//   getSelectedTeam: PropTypes.func.isRequired,
//   filterPlayers: PropTypes.func.isRequired,
//   selectedTeam: PropTypes.object.isRequired,
// };

// export default connect(mapStateToProps, { getSelectedTeam, filterPlayers })(
//   Filter
// );
