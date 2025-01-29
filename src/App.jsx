import './App.css'
import Editor from './components/Editor/Editor'  // Correct import path
import  { useState } from 'react';


function App() {
  const [markdownText, setMarkdownText] = useState("")
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Markdown Previewer
        </h1>
        <Editor value={markdownText} onChange={setMarkdownText}/>
      </div>
    </div>
  )
}

export default App
