import React from 'react';
import Spinner from 'components/_shared/spinner';
import { shallow } from 'enzyme';

let wrapped;

// component renders if true

beforeEach(() => {
  wrapped = shallow(<Spinner isLoading />);
});

it('has a loading property', () => {
  wrapped.find('isLoading');
});
