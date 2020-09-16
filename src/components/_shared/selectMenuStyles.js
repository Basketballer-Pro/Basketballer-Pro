const selectMenuStyles = () => {
  return {
    container: (provided) => ({
      ...provided,
      width: '10%',
      height: 33,
      fontFamily: 'arial',
      fontSize: 14,
    }),
    control: (provided) => ({
      ...provided,
      border: 'none',
      borderRadius: 'none',
      borderBottom: '1px solid grey',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#5C5C5C',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
  };
};

export default selectMenuStyles;
