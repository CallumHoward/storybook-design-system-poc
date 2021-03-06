import { ADDON_ID as ADDON_IFRAME } from "@geometricpanda/storybook-addon-iframe";

export const parameters = {
  viewMode: "docs",
  previewTabs: {
    "storybook/docs/panel": { index: -1 },
    canvas: {},
    [ADDON_IFRAME]: {
      title: "Frontify",
    },
  },
  layout: "centered",
  backgrounds: {
    default: "Secondary",
    values: [
      {
        name: "Primary",
        value: "#FFFFFF",
      },
      {
        name: "Secondary",
        value: "#E9EEF6",
      },
      {
        name: "Tertiary",
        value: "#DEE3ED",
      },
      {
        name: "OnColour",
        value: "#100E20",
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
};

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    defaultValue: "en",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en-us", right: "πΊπΈ", title: "English US" },
        { value: "en-gb", right: "π¬π§", title: "English UK" },
        { value: "de", right: "π©πͺ", title: "German" },
        { value: "fr", right: "π«π·", title: "French" },
        { value: "es", right: "πͺπΈ", title: "Spanish" },
        { value: "pt", right: "π΅πΉ", title: "Portuguese" },
      ],
    },
  },
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "kakadu-light",
    toolbar: {
      icon: "eye",
      // Array of plain string values or MenuItem shape (see below)
      items: [
        "kakadu-light",
        "kakadu-dark",
        "canopy-light",
        "canopy-dark",
        "legacy",
      ],
      // Property that specifies if the name of the item will be displayed
      // showName: true,
    },
  },
};
