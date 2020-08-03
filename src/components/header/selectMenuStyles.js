const selectMenuStyles = (teamColor) => {
  return {
    container: (provided) => ({
      ...provided,
      backgroundColor: teamColor,
      height: '100%',
      cursor: 'pointer',
      width: 320,
      '@media only screen and (max-width: 1074px)': {
        ...provided['@media only screen and (max-width: 1074px)'],
        fontSize: 10,
      },
      '@media only screen and (max-width: 834px)': {
        ...provided['@media only screen and (max-width: 834px)'],
        maxWidth: 232,
      },
    }),
    control: (provided) => ({
      display: 'flex',
      height: '100%',
      '@media only screen and (max-width: 838px)': {
        ...provided['@media only screen and (max-width: 838px)'],
        maxWidth: 242,
        fontSize: 10,
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      width: 285,
      padding: 0,
      margin: 0,
      color: 'white',
      fontFamily: 'spurs',
      fontSize: 22,
      '@media only screen and (max-width: 1074px)': {
        ...provided['@media only screen and (max-width: 1074px)'],
        maxWidth: 250,
        fontSize: 10,
      },
      '@media only screen and (max-width: 900px)': {
        ...provided['@media only screen and (max-width: 900px)'],
        maxWidth: 235,
        fontSize: 10,
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'white',
      margin: 0,
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      display: 'flex',
      justifyContent: 'center',
      paddingRight: 22,
      width: 35,
      '@media only screen and (max-width: 1074px)': {
        ...provided['@media only screen and (max-width: 1074px)'],
        width: '2rem',
      },
      '@media only screen and (max-width: 834px)': {
        ...provided['@media only screen and (max-width: 834px)'],
        width: 20,
        paddingRight: 10,
      },
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'white',
    }),
    menu: (provided) => ({
      ...provided,
      margin: 0,
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: 310,
      padding: 0,
    }),
  };
};

export default selectMenuStyles;
