import { composeStories } from "@storybook/testing-react";
import { fireEvent, render } from "@testing-library/react";
import * as ButtonStories from "./button.stories";

// composeStories will process all information related to the component (eg. args)
const { States: StatesButtonGroup } = composeStories(ButtonStories);

describe("Button disabled state", () => {
  it("Should fire onClick event when clicked", () => {
    const { queryByTestId: queryByDataAnchor } = render(<StatesButtonGroup />);
    fireEvent.click(queryByDataAnchor("sckit-button-default")!);
    expect(queryByDataAnchor("sckit-button-default")).not.toBeDisabled();
  });

  it("Should have disabled attribute on the button html element", () => {
    // TODO use dataAnchor from sc-react-testing-library
    const { queryByTestId: queryByDataAnchor } = render(<StatesButtonGroup />);
    expect(queryByDataAnchor("sckit-button-default")).not.toBeDisabled();
    expect(queryByDataAnchor("sckit-button-disabled")).toBeDisabled();
    expect(queryByDataAnchor("sckit-button-loading")).toBeDisabled();
  });
});
