import React from 'react';
import { shallow } from 'enzyme';
import Keypad from './Keypad';

describe('Keypad', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <Keypad
                callOperator={jest.fn()}
                numbers={[]}
                operators={[]}
                setOperator={jest.fn()}
                updateDisplay={jest.fn()}
            />
      );
    });
  
    it('should render 3 <div />', () => {
          expect(wrapper.find('div').length).toEqual(3);
    });

    it('should render the value of numbers', () => {
        wrapper.setProps({numbers: ['0','1','2']});
        expect(wrapper.find('.numbers-container').text()).toEqual('012');
    });

    it('render the values of operators', () => {
        wrapper.setProps({operators: ['+','-','*','/',]});
        expect(wrapper.find('.operators-container').text()).toEqual('+-*/');
    });

    it('should render an instance of the Key component', () => {
        expect(wrapper.find('Key').length).toEqual(1);
    });

    it('should render an instance of the Key component for each index of numbers, operator and the submit Key', () => {
        const numbers = ['0','1'];
        const operators = ['+', '-'];
        const submit = 1;
        const keyTotal = numbers.length()+ operators.length() + submit;
        wrapper.setProps({numbers, operators });
        expect(wrapper.find('Key').length).toEqual(keyTotal);
    });
    
});