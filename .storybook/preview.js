export const parameters = {
  viewMode: "docs",
  previewTabs: { "storybook/docs/panel": { index: -1 } },
  layout: "centered",
  backgrounds: {
    values: [
      "#E9EEF6",
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
