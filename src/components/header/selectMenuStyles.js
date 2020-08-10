const selectMenuStyles = (teamColor) => {
  return {
    container: (provided) => ({
      ...provided,
      backgroundColor: teamColor,
      height: '100%',
      cursor: 'pointer',
      width: 320,
      '@media all and (max-width: 960px)': {
        maxWidth: 210,
      },
      '@media all and (max-width: 736px)': {
        maxWidth: 'unset',
        width: '100%',
      },
    }),
    control: () => ({
      display: 'flex',
      height: '100%',
      '@media all and (max-width: 736px)': {
        width: '96%',
      },
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
        width: 10,
        padding: 0,
        marginRight: 5,
      },
      '@media all and (max-width: 736px)': {
        width: 13,
        paddingRight: 0,
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
      '@media all and (max-width: 736px)': {
        maxHeight: '60vh',
      },
    }),
  };
};

export default selectMenuStyles;
