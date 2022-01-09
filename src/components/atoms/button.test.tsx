import { composeStories } from "@storybook/testing-react";
import { fireEvent, render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { MouseEvent } from "react";
import { ButtonStates } from "./button-meta";
import {
  DISABLED_BGCOLOR,
  DISABLED_COLOR,
  TYPE_HOVER_BGCOLOR_MAP,
} from "./button-styled";
import * as ButtonStories from "./button.stories";

expect.extend(toHaveNoViolations);

// composeStories will process all information related to the component (eg. args)
const {
  ReactStates: StatesButtonGroup,
  Variations: VariationsButtonGroup,
  Types: TypesButtonGroup,
} = composeStories(ButtonStories);

describe("Button disabled state", () => {
  it("Should fire onClick callback when not disabled and clicked", () => {
    const mockOnClick = jest.fn(); // Relies on propagation
    const { getByTestId } = render(<StatesButtonGroup onClick={mockOnClick} />);
    fireEvent.click(getByTestId("sckit-button-default"));
    expect(mockOnClick).toHaveBeenCalled();
  });

  it.each(["disabled", "loading"] as ButtonStates[])(
    "Should not fire onClick callback when in %s state and clicked",
    (state: ButtonStates) => {
      const mockOnClick = jest.fn(); // Relies on propagation
      const { getByTestId } = render(
        <StatesButtonGroup onClick={mockOnClick} />
      );
      fireEvent.click(getByTestId(`sckit-button-${state}`));
      expect(mockOnClick).not.toHaveBeenCalled();
    }
  );

  it("Should propagate click events to the parent if not disabled", () => {
    const mockOnClick = jest.fn();
    const mockParentOnClick = jest.fn();
    const { getByTestId } = render(
      <div onClick={mockParentOnClick}>
        <StatesButtonGroup onClick={mockOnClick} />
      </div>
    );
    fireEvent.click(getByTestId(`sckit-button-default`));
    expect(mockOnClick).toHaveBeenCalled();
    expect(mockParentOnClick).toHaveBeenCalled();
  });

  it("Should be possible to prevent propagation in onClick callback", () => {
    const mockOnClick = jest
      .fn()
      .mockImplementation((e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.preventDefault();
      });
    const mockParentOnClick = jest.fn();
    const { getByTestId } = render(
      <div onClick={mockParentOnClick}>
        <StatesButtonGroup onClick={mockOnClick} />
      </div>
    );
    fireEvent.click(getByTestId(`sckit-button-default`));
    expect(mockOnClick).toHaveBeenCalled();
    expect(mockParentOnClick).not.toHaveBeenCalled();
  });

  it("Should have disabled attribute on the button HTML element", () => {
    // TODO use dataAnchor from sc-react-testing-library
    const { getByTestId } = render(<StatesButtonGroup />);
    expect(getByTestId("sckit-button-default")).not.toBeDisabled();
    expect(getByTestId("sckit-button-disabled")).toBeDisabled();
    expect(getByTestId("sckit-button-disabled")).toHaveStyle({
      backgroundColor: DISABLED_BGCOLOR,
      borderColor: DISABLED_BGCOLOR,
      color: DISABLED_COLOR,
    });
    expect(getByTestId("sckit-button-disabled")).not.toHaveStyle({
      cursor: "pointer",
    });
    expect(getByTestId("sckit-button-loading")).toBeDisabled();
  });
});

describe("Ghost button styles", () => {
  it("Should have transparent border to be same size as other variations", () => {
    const { getByTestId } = render(<VariationsButtonGroup />);
    expect(getByTestId("sckit-button-ghost")).toHaveStyle({
      borderStyle: "solid",
      borderWidth: "1px",
    });
  });

  // FIXME should be failing but it doesn't
  it.skip("Should not change background on mouseDown", () => {
    const { getByTestId } = render(<VariationsButtonGroup />);
    fireEvent.mouseDown(getByTestId(`sckit-button-ghost`));
    expect(getByTestId("sckit-button-ghost")).toHaveStyle({
      background: "none",
    });
  });
});

describe("Positive type button", () => {
  // FIXME Can't trigger hover or mouseover with fireEvent
  it.skip("Should have sufficient color contrast when hovered", async () => {
    const { container, getByTestId } = render(<TypesButtonGroup />);
    fireEvent.mouseOver(getByTestId(`sckit-button-positive`));
    expect(getByTestId(`sckit-button-positive`)).toHaveStyle({
      backgroundColor: TYPE_HOVER_BGCOLOR_MAP["positive"],
    });
    expect(await axe(container)).toHaveNoViolations();
  });
});
