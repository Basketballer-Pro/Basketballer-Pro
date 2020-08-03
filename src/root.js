import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import PropTypes from 'prop-types';
import reduxPromise from 'redux-promise';
import reducers from 'reducers/combinedReducers';

const Root = ({ children, initialState }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxPromise)
  );

  return <Provider store={store}>{children}</Provider>;
};

Root.propTypes = {
  children: PropTypes.node.isRequired,
  initialState: PropTypes.object,
};

Root.defaultProps = {
  initialState: {},
};

Root.displayName = 'Root';

export default Root;
