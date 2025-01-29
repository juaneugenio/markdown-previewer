/** @format */

import React from "react";
import { describe, test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Preview from "../Preview";

describe("Preview component", () => { 
  test('"Should render element with id="preview"', () => { 
    render(<Preview content=""/>)

    const previewElement = screen.getByTestId("preview");
    expect(previewElement).toBeInTheDocument();
   })
 })