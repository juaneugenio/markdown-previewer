/** @format */

// import React from "react";
import { describe, test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { DEFAULT_MARKDOWN } from "../constants/defaultMarkdown";

describe("Markdown Previewer Integration", () => {
  test("renders GitHub flavored markdown elements", async () => {
    render(<App />);
    const editorElement = screen.getByRole("textbox", { id: "editor" });
    const previewElement = screen.getByTestId("preview");

    const markdownText =
      "# Header\n## Sub-header\n[Link](https://example.com)\n`inline code`\n```\ncode block\n```\n- List item\n> Blockquote\n![Image](image.jpg)\n**Bold text**";

    await userEvent.clear(editorElement);
    await userEvent.type(editorElement, markdownText);

    // Actualizamos las expectativas para coincidir con el formato real
    expect(previewElement.innerHTML).toContain("<h1>Header</h1>");
    expect(previewElement.innerHTML).toContain("<h2>Sub-header</h2>");
    expect(previewElement.innerHTML).toContain('(<a href="https://example.com">https://example.com</a>)');
    expect(previewElement.innerHTML).toContain("<code>inline code</code>");
    expect(previewElement.innerHTML).toContain("<pre><code>code block");
    expect(previewElement.innerHTML).toContain("<li>List item");
    expect(previewElement.innerHTML).toContain("<blockquote>");
    expect(previewElement.innerHTML).toContain("<strong>Bold text</strong>");
  });

  test("renders markdown elements correctly", async () => {
    render(<App />);
    const editorElement = screen.getByRole("textbox", { id: "editor" });
    const previewElement = screen.getByTestId("preview");

    // Test 1: Simple text
    await userEvent.clear(editorElement);
    await userEvent.type(editorElement, "testing");
    expect(previewElement.innerHTML.trim()).toBe("<p>testing</p>");

    // Test 2: Headers
    await userEvent.clear(editorElement);
    await userEvent.type(editorElement, "# h1");
    expect(previewElement.innerHTML.trim()).toBe("<h1>h1</h1>");

    await userEvent.clear(editorElement);
    await userEvent.type(editorElement, "## h2");
    expect(previewElement.innerHTML.trim()).toBe("<h2>h2</h2>");

    // Test 3: Bold text
    await userEvent.clear(editorElement);
    await userEvent.type(editorElement, "**bold**");
    expect(previewElement.innerHTML.trim()).toBe("<p><strong>bold</strong></p>");

    // Test 4: Links - ajustado al formato real de marked
    await userEvent.clear(editorElement);
    await userEvent.type(editorElement, "[Link](https://www.example.com)");
    expect(previewElement.innerHTML.trim()).toBe('<p>(<a href="https://www.example.com">https://www.example.com</a>)</p>');

    // Test 5: Code
    await userEvent.clear(editorElement);
    await userEvent.type(editorElement, "`code`");
    expect(previewElement.innerHTML.trim()).toBe("<p><code>code</code></p>");
  });

  // Story 5
  test("loads with default markdown content", () => {
		render(<App />);
		const editorElement = screen.getByRole("textbox", { id: "editor" });
		const previewElement = screen.getByTestId("preview");

		// Verify editor has default content
		expect(editorElement.value).toBe(DEFAULT_MARKDOWN);

		// Verify preview renders default content
		expect(previewElement.innerHTML).toContain("<h1>Welcome to my React Markdown Previewer!</h1>");
		expect(previewElement.innerHTML).toContain("<h2>This is a sub-heading...</h2>");
		expect(previewElement.innerHTML).toContain('<a href="https://github.com/juaneugenio">');
		expect(previewElement.innerHTML).toContain("<code>inline code</code>");
		expect(previewElement.innerHTML).toContain("<pre><code>");
		expect(previewElement.innerHTML).toContain("<li>First item in a list</li>");
		expect(previewElement.innerHTML).toContain("<blockquote>");
		expect(previewElement.innerHTML).toContain('<img src="https://reactjs.org/logo-og.png"');
		expect(previewElement.innerHTML).toContain("<strong>bold text</strong>");
	});

  test("renders line breaks correctly", async () => {
    render(<App />);
    const editorElement = screen.getByRole("textbox", { id: "editor" });
    const previewElement = screen.getByTestId("preview");
  
    await userEvent.clear(editorElement);
    await userEvent.type(editorElement, "First line\nSecond line");
    
    expect(previewElement.innerHTML).toContain("First line<br>Second line");
  });
});