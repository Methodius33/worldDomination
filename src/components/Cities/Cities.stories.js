import React from 'react';

import Cities from './Cities';

export default {
  title: 'Example/Cities',
  component: Cities,
  argTypes: {},
};
const Template = (args) => <Cities {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

Primary.args = {
  cities: {
    0: {
      id: 0,
      name: 'Москва',
      level: 30,
      isShield: false,
      isDestroyed: true,
    },
    1: {
      id: 1,
      name: 'Питер',
      level: 130,
      isShield: true,
      isDestroyed: false,
    },
    2: {
      id: 2,
      name: 'Москва',
      level: 30,
      isShield: false,
      isDestroyed: false
    },
    3: {
      id: 3,
      name: 'Москва',
      level: 30,
      isShield: false,
      isDestroyed: true,
    },
  },
};

Secondary.args={
  cities:{
    0:{
      id: 0,
      name: 'Иваново',
      level: 47,
      isShield: false,},
    1:{
      id: 1,
      name: 'Екатеринбург',
      level: 55,
      isShield: true,}
  }
}