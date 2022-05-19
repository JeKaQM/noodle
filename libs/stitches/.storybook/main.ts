// eslint-disable-next-line import/no-relative-packages
import rootMain from '../../../.storybook/main';

const main = {
  ...rootMain,
  core: {
    ...rootMain.core,
    builder: 'webpack5',
  },
  stories: [
    ...rootMain.stories,
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons],
};

export default main;
