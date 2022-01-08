export const parameters = {
  viewMode: "docs",
  previewTabs: { "storybook/docs/panel": { index: -1 } },
  layout: "centered",
  backgrounds: {
    default: 'Secondary',
    values: [
      {
        name: 'Primary',
        value: '#FFFFFF',
      },
      {
        name: 'Secondary',
        value: '#E9EEF6',
      },
      {
        name: 'Tertiary',
        value: '#DEE3ED',
      },
      {
        name: 'OnColour',
        value: '#100E20',
      },
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
