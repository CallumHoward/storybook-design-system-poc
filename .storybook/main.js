module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@geometricpanda/storybook-addon-iframe",
    "storybook-addon-designs",
    "@storybook/addon-a11y",
    "storybook-addon-pseudo-states",
  ],
  reactOptions: {
    fastRefresh: true,
  },
  framework: "@storybook/react",
  staticDirs: ["../public"],
  core: {
    builder: "webpack5",
  },
};
