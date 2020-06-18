import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should throw error without props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

});
