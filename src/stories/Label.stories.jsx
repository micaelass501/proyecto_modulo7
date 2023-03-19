import React from 'react';

import  Label from './Label';

export default {
  title: 'MUI/Label',
  component: Label,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
};

const Template = (args) => <Label {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Label',
  show: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Label',
};
