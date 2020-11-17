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
    slot: /*html*/ `<div style="color: pink">Pink</div>`,
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
