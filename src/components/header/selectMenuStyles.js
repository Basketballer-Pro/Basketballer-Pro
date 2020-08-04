const selectMenuStyles = (teamColor) => {
  return {
    container: (provided) => ({
      ...provided,
      backgroundColor: teamColor,
      height: '100%',
      cursor: 'pointer',
      width: 320,
      '@media all and (max-width: 960px)': {
        ...provided['@media all and (max-width: 960px)'],
        maxWidth: 210,
      },
    }),
    control: (provided) => ({
      display: 'flex',
      height: '100%',
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: 0,
      margin: 0,
      color: 'white',
      fontFamily: 'spurs',
      fontSize: 22,
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
      '@media all and (max-width: 960px)': {
        ...provided['@media all and (max-width: 960px)'],
        width: 11,
        paddingRight: 3,
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
