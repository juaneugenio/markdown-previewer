/** @format */
import React from "react";
import { describe, test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Editor from "../Editor";

describe("Editor component", () => {
	// Test to check if the textarea element has an ID="edito"
	test('should render textarea with id="editor"', () => {
		render(<Editor value="" onChange={() => {}} />);

		const editorElement = screen.getByRole("textbox", {
			id: "editor",
		});

		expect(editorElement).toBeInTheDocument();
	});
});
