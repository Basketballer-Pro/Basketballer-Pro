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
      '@media only screen and (max-width: 838px)': {
        ...provided['@media only screen and (max-width: 838px)'],
        maxWidth: 232,
      },
      '@media only screen and (max-width: 770px)': {
        ...provided['@media only screen and (max-width: 770px)'],
        maxWidth: 222,
      },
      '@media only screen and (max-width: 720px)': {
        ...provided['@media only screen and (max-width: 770px)'],
        maxWidth: 210,
      },
      '@media only screen and (max-width: 680px)': {
        ...provided['@media only screen and (max-width: 680px)'],
        maxWidth: 204,
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
      '@media only screen and (max-width: 838px)': {
        ...provided['@media only screen and (max-width: 838px)'],
        maxWidth: 30,
        paddingRight: 11,
        paddingLeft: 11,
      },
      '@media only screen and (max-width: 770px)': {
        ...provided['@media only screen and (max-width: 770px)'],
        paddingRight: 10,
        paddingLeft: 10,
      },
      '@media only screen and (max-width: 680px)': {
        ...provided['@media only screen and (max-width: 680px)'],
        maxWidth: 28,
        paddingRight: 9,
        paddingLeft: 9,
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
