/** @format */

import "./App.css";
// import React from "react";
import Editor from "./components/Editor/Editor"; // Correct import path
import Preview from "./components/Preview/Preview";
import { useState } from "react";
import { marked } from "marked";
import { DEFAULT_MARKDOWN } from "./constants/defaultMarkdown";

marked.setOptions({
	breaks: true,
	emoji: true,
	gfm: true,
	headerIds: true,
	mangle: false,
	smartLists: true,
});

function App() {
  const [content, setContent] = useState(DEFAULT_MARKDOWN);
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-grow py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Markdown Previewer</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="w-full min-h-[50vh]">
              <h2 className="w-full text-xl font-bold text-center min-h-[4vh]">MD Editor</h2>
              <Editor value={content} onChange={setContent} />
            </div>
            <div className="w-full min-h-[50vh]">
              <h2 className="w-full text-xl font-bold text-center min-h-[4vh]">MD Preview</h2>
              <Preview content={content} />
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full py-4 bg-gray-800 text-white text-center">
        <p>
          Author: <a href="https://github.com/juaneugenio" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">Juan C. Eugenio</a> © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;
