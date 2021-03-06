import { COLORS } from 'enums';

const { DARK_GREY, LIGHT_GREY } = COLORS;

const selectMenuStyles = () => {
  return {
    container: (provided) => ({
      ...provided,
      boxShadow: 'none',
      fontFamily: 'arial',
      fontSize: 14,
    }),
    control: (provided) => ({
      ...provided,
      minHeight: 33,
      boxShadow: 'none',
      border: 'none',
      borderRadius: 'none',
      cursor: 'pointer',
      borderBottom: `1px solid ${DARK_GREY}`,
      '&:hover': {
        borderColor: 'none',
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      margin: 0,
      padding: 0,
    }),
    singleValue: (provided) => ({
      ...provided,
      margin: 0,
      padding: 0,
      color: DARK_GREY,
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    menu: (provided) => ({
      ...provided,
      marginTop: 0,
      borderRadius: 0,
      boxShadow: `0 4px 2px -2px ${DARK_GREY}`,
    }),
    menuList: (provided) => ({
      ...provided,
      padding: 0,
    }),
    option: (provided) => ({
      ...provided,
      color: DARK_GREY,
      cursor: 'pointer',
      backgroundColor: 'none',
      '&:hover': {
        backgroundColor: LIGHT_GREY,
      },
    }),
  };
};

export default selectMenuStyles;
