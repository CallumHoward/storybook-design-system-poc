import { composeStories } from "@storybook/testing-react";
import { fireEvent, render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { MouseEvent } from "react";
import {
  DISABLED_BGCOLOR,
  DISABLED_COLOR,
  TYPE_HOVER_BGCOLOR_MAP,
} from "./button-styled";
import * as ButtonStories from "./button.stories";

expect.extend(toHaveNoViolations);

// composeStories will process all information related to the component (eg. args)
const {
  States: StatesButtonGroup,
  Variations: VariationsButtonGroup,
  Types: TypesButtonGroup,
} = composeStories(ButtonStories);

describe("Button disabled state", () => {
  it("Should fire onClick callback when not disabled and clicked", async () => {
    const mockOnClick = jest.fn(); // Relies on propagation
    const { container } = render(<StatesButtonGroup onClick={mockOnClick} />);
    await StatesButtonGroup.play({ canvasElement: container });
    fireEvent.click(screen.getByTestId("sckit-button-default"));
    expect(mockOnClick).toHaveBeenCalled();
  });

  it("Should propagate click events to the parent if not disabled", () => {
    const mockOnClick = jest.fn();
    const mockParentOnClick = jest.fn();
    render(
      <div onClick={mockParentOnClick}>
        <StatesButtonGroup onClick={mockOnClick} />
      </div>
    );
    fireEvent.click(screen.getByTestId(`sckit-button-default`));
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
    render(
      <div onClick={mockParentOnClick}>
        <StatesButtonGroup onClick={mockOnClick} />
      </div>
    );
    fireEvent.click(screen.getByTestId(`sckit-button-default`));
    expect(mockOnClick).toHaveBeenCalled();
    expect(mockParentOnClick).not.toHaveBeenCalled();
  });

  it("Should have disabled attribute on the button HTML element", () => {
    // TODO use dataAnchor from sc-react-testing-library
    render(<StatesButtonGroup />);
    expect(screen.getByTestId("sckit-button-default")).not.toBeDisabled();
    expect(screen.getByTestId("sckit-button-disabled")).toBeDisabled();
    expect(screen.getByTestId("sckit-button-disabled")).toHaveStyle({
      backgroundColor: DISABLED_BGCOLOR,
      borderColor: DISABLED_BGCOLOR,
      color: DISABLED_COLOR,
    });
    expect(screen.getByTestId("sckit-button-disabled")).not.toHaveStyle({
      cursor: "pointer",
    });
    expect(screen.getByTestId("sckit-button-loading")).toBeDisabled();
  });
});

describe("Ghost button styles", () => {
  it("Should have transparent border to be same size as other variations", () => {
    render(<VariationsButtonGroup />);
    expect(screen.getByTestId("sckit-button-ghost")).toHaveStyle({
      borderStyle: "solid",
      borderWidth: "1px",
    });
  });

  // FIXME should be failing but it doesn't
  it.skip("Should not change background on mouseDown", () => {
    render(<VariationsButtonGroup />);
    fireEvent.mouseDown(screen.getByTestId(`sckit-button-ghost`));
    expect(screen.getByTestId("sckit-button-ghost")).toHaveStyle({
      background: "none",
    });
  });
});

describe("Positive type button", () => {
  // FIXME Can't trigger hover or mouseover with fireEvent
  it.skip("Should have sufficient color contrast when hovered", async () => {
    const { container } = render(<TypesButtonGroup />);
    fireEvent.mouseOver(screen.getByTestId(`sckit-button-positive`));
    expect(screen.getByTestId(`sckit-button-positive`)).toHaveStyle({
      backgroundColor: TYPE_HOVER_BGCOLOR_MAP["positive"],
    });
    expect(await axe(container)).toHaveNoViolations();
  });
});
