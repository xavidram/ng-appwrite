import { configure, addDecorator, addParameters } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);
addParameters({
  backgrounds: {
    values: [
      { name: 'appwrite', value: '#f02e65', default: true },
    ],
  },
});

configure(require.context('../src/lib', true, /\.stories\.(j|t)sx?$/), module);
