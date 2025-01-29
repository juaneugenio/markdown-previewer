/** @format */

// import React from 'react'
import PropTypes from 'prop-types'

const Editor = ({ value, onChange }) => {
  return (
		<div className="w-full h-full">
			<textarea
				id="editor"
				className="w-full min-h-[calc(100vh-20rem)] p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder="Enter your markdown here..."
			/>
		</div>
	);
}

Editor.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Editor
