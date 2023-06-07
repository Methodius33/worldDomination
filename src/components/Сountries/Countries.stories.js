import React from 'react';
import styled from "styled-components";

import Countries from './Countries';

const Wrapper = styled.div`
    width: 180px;
`

export default {
  title: 'Example/Countries',
  component: Countries,
  argTypes: {},
};
const Template = (args) =><Wrapper> <Countries {...args} /></Wrapper>;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

Primary.args = {
    text: 'Наложенные санкции на другие страны',
    countries:{
        0:{
            id:0,
            name:'Россия',
            isActive: true
        },
        1:{
            id:1,
            name:'Япония',
            isActive: false
        },
        2:{
            id:2,
            name:'Испания',
            isActive: true
        },
        3:{
            id:3,
            name:'Аргентина',
            isActive: false
        }
    }
}

Secondary.args = {
    text: 'Наложенные санкции на другие страны',
    color: '#81FFEE',
    countries:{
        0:{
            id:0,
            name:'Китай',
            isActive: true
        },
        1:{
            id:1,
            name:'Латвия',
            isActive: false
        },
        2:{
            id:2,
            name:'Португалия',
            isActive: true
        },
        3:{
            id:3,
            name:'Бразилия',
            isActive: false
        }
    }
}