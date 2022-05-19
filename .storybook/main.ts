const config = {
  stories: [],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@nrwl/react/plugins/storybook',
  ],
  core: {
    builder: 'webpack5',
  },
  features: {
    storyStoreV7: true,
  },
};

export default config;
