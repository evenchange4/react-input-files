// @flow
import * as React from 'react';
import { mount } from 'enzyme';
import InputFiles from '../index';

it('should handle onClick without error', () => {
  const wrapper = mount(
    <InputFiles onChange={() => {}}>
      <div>input file</div>
    </InputFiles>,
  );
  const clickable = wrapper.find('div').first();
  clickable.simulate('click');
});

it('should handle onChange', () => {
  const mockOnChange = jest.fn();
  const wrapper = mount(
    <InputFiles onChange={mockOnChange}>
      <div>input file</div>
    </InputFiles>,
  );
  const input = wrapper.find('input').first();
  input.simulate('change', { target: { files: [{ name: 1 }, { name: 2 }] } });
  expect(mockOnChange).toHaveBeenCalled();
  expect(mockOnChange).toMatchSnapshot();
});
