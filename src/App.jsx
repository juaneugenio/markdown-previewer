import './App.css'
import React from 'react';
import Editor from './components/Editor/Editor'  // Correct import path
import Preview from './components/Preview/Preview';
import  { useState } from 'react';
import { marked } from 'marked';
import {DEFAULT_MARKDOWN} from "./constants/defaultMarkdown";


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
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Markdown Previewer
        </h1>
        <Editor value={content} onChange={setContent}/>
        <Preview content={content}/>
      </div>
    </div>
  )
}

export default App
