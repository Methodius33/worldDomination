import React from 'react';
import styled from "styled-components";

import Info from './Info';

const Wrapper = styled.div`
    width: 600px;
`

export default {
  title: 'Example/Info',
  component: Info,
  argTypes: {},
};
const Template = (args) =><Wrapper> <Info {...args} /></Wrapper>;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

Primary.args={
    isNuclear: false, 
    bombCount: 0, 
    ecology: 30, 
    amount: 2435
}

Secondary.args={
    isNuclear: true, 
    bombCount: 44, 
    ecology: 77, 
    amount: 54234
}