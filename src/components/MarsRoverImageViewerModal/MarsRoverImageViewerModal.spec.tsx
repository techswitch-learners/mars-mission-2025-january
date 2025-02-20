import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MarsRoverImageViewerModal } from "./MarsRoverImageViewerModal";

describe("MarsRoverImageViewerModal", () => {
  const imageURL = "https://picsum.photos/id/600/1600/900.jpg";
  const imageData = "TestData";
  const mockFunction = jest.fn();
  it("renders the modal with the image and descrption", () => {
    render(
      <MarsRoverImageViewerModal
        imageUrl={imageURL}
        imageData={imageData}
        showModal={true}
        handleClick={mockFunction}
      />,
    );
    const testImage = document.querySelector("img") as HTMLImageElement;
    expect(testImage.src).toContain(
      "https://picsum.photos/id/600/1600/900.jpg",
    );
    const testData = document.querySelector("p") as HTMLParagraphElement;
    expect(testData.textContent).toContain("TestData");
  });

  test("Calls handleClick when close button is clicked", () => {
    render(
      <MarsRoverImageViewerModal
        imageUrl={imageURL}
        imageData={imageData}
        showModal={true}
        handleClick={mockFunction()}
      />,
    );
    const closeButton = screen.getByRole("button", { name: /X/i });
    console.log("Close button constant" + closeButton.textContent);
    fireEvent.click(closeButton);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
