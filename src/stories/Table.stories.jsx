import React from 'react';

import  Table from './Table';

export default {
  title: 'MUI/Table',
  component: Table,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
};

const Template = (args) => <Table {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  //table: null,
  filas: 10,
  columnas: 3,
  Headers: 'Header dinamico',
  contenido: ''
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Label',
// };
