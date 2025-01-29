/** @format */

import React from 'react'

const Editor = ({ value, onChange }) => {
  return (
    <div className="w-full">
      <textarea
        id="editor"
        className="w-full h-96 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your markdown here..."
      />
    </div>
  )
}

export default Editor
