import '~/soft-shape';

export default {
  title: 'Soft Shape',
  argTypes: {
    flat: { control: 'boolean' },
    concave: { control: 'boolean' },
    convex: { control: 'boolean' },
    pressed: { control: 'boolean' },
    slot: { control: 'text' },
  },
  args: {
    flat: true,
    slot: /*html*/ ``,
  },
  parameters: {
    actions: {
      handles: ['shape soft-shape'],
    },
  },
};

const Template = (args) => {
  return /*html*/ `
    <soft-shape
      ${args.flat ? 'flat="true"' : ''}
      ${args.concave ? 'concave="true"' : ''}
      ${args.convex ? 'convex="true"' : ''}
      ${args.pressed ? 'pressed="true"' : ''}
    >
      ${args.slot ? args.slot : ''}
    </soft-shape>
  `;
};

export const Default = Template.bind({});

export const Flat = Template.bind({});
Flat.args = { flat: true };

export const Concave = Template.bind({});
Concave.args = { concave: true };

export const Convex = Template.bind({});
Convex.args = { convex: true };

export const Pressed = Template.bind({});
Pressed.args = { pressed: true };
