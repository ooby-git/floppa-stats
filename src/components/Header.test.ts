import { render, screen } from "@testing-library/react";
import Header from "./Header";

it("should render", () => {
  render(Header());
  const text = screen.getByText("Floppa Stats");
  expect(text).toBeInTheDocument();
});
