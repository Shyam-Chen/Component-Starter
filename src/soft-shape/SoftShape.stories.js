import '../../dist/soft-shape';

export default {
  title: 'Soft Shape',
  argTypes: {
    slot: { control: 'text' },
  },
};

const Template = ({ pressed, slot }) => {
  return `
    <soft-shape
      ${pressed ? 'pressed="true"' : ''}
    >
      ${slot}
    </soft-shape>
  `;
};

export const Text = Template.bind({});
Text.args = {
  pressed: false,
  slot: 'A',
};

export const Text2 = Template.bind({});
Text2.args = {
  pressed: true,
  slot: 'B',
};
