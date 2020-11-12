// TODO: import SoftShape from '~/soft-shape/SoftShape';
import SoftShape from './SoftShape.svelte';

export default {
  title: 'SoftShape',
  component: SoftShape,
  argTypes: {
    flat: { control: 'boolean', defaultValue: { summary: true } },
    concave: { control: 'boolean' },
    convex: { control: 'boolean' },
    pressed: { control: 'boolean' },
  },
};

const Template = ({ ...args }) => ({
  Component: SoftShape,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};

export const Flat = Template.bind({});
Flat.args = { flat: true };

export const Concave = Template.bind({});
Concave.args = { pressed: true };
