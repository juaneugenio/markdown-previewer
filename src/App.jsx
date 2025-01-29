import './App.css'
import React from 'react';
import Editor from './components/Editor/Editor'  // Correct import path
import Preview from './components/Preview/Preview';
import  { useState } from 'react';
import { marked } from 'marked';


marked.setOptions({
	breaks: true, // Permite saltos de línea
	gfm: true, // GitHub Flavored Markdown
	headerIds: true, // Genera IDs para headers
	mangle: false, // No modifica los textos
	smartLists: true, // Mejora el formato de listas
});

function App() {
  const [markdownText, setMarkdownText] = useState("")
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Markdown Previewer
        </h1>
        <Editor value={markdownText} onChange={setMarkdownText}/>
        <Preview content={markdownText}/>
      </div>
    </div>
  )
}

export default App
