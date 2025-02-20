import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MarsRoverImageViewerModal } from "./MarsRoverImageViewerModal";
// import { icons, SquareX } from "lucide-react";
// import {} from "@testing-library/jest-dom"

describe("MarsRoverImageViewerModal", () => {
  const imageURL = "https://picsum.photos/id/600/1600/900.jpg";
  const imageData = "TestData";
  it("renders the modal with the image", () => {
    render(
      <MarsRoverImageViewerModal
        imageUrl={imageURL}
        imageData={imageData}
        showModal={true}
        handleClick={jest.fn()}
      />,
    );
    const testImage = document.querySelector("img") as HTMLImageElement;
    expect(testImage.src).toContain(
      "https://picsum.photos/id/600/1600/900.jpg"
    );
    const testData = document.querySelector("p") as HTMLParagraphElement;
    expect(testData.textContent).toContain("TestData");
  });

  test("Close", () => {
    render(
      <MarsRoverImageViewerModal
        imageUrl={imageURL}
        imageData={imageData}
        showModal={true}
        handleClick={jest.fn()}
      />,
    );
    const closeButton = screen.getByRole("button");
    // let showModal = { showModal };
    fireEvent.click(closeButton);
    // expect(showModal).toBe(false);
    expect(jest.fn()).toHaveBeenCalledTimes(1);
  });
});
