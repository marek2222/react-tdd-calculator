import * as React from 'react';
import { shallow } from 'enzyme';
import { Calculator } from './Calculator';

describe('Calculator', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Calculator />));

    if('should render a <div />', () => {
        expect(wrapper.find('div').lenght).toEqual(1);
    });
});
