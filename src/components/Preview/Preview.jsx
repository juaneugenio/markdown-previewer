/** @format */
import PropTypes from "prop-types";
// import React from "react";
import { marked } from "marked";

marked.setOptions({
	breaks: true,
	gfm: true,
	headerIds: true,
	mangle: false,
	pedantic: false,
});

const Preview = ({ content }) => {
  // console.log(content);
  
	const createMarkup = () => {
		try {
			const safeContent = content || "";
			const htmlContent = marked.parse(safeContent);
      // console.log(htmlContent);
      
			return { __html: htmlContent };
		} catch (error) {
			console.error("Error parsing markdown:", error);
			return { __html: content };
		}
	};

	return (
		<div className="w-full">
			<article
				id="preview"
				data-testid="preview"
				className="prose prose-slate prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl p-4 border border-gray-300 rounded-lg shadow-sm min-h-[24rem] bg-fuchsia-200 prose-li:marker:text-blue-400 prose-blockquote:border-blue-400"
				dangerouslySetInnerHTML={createMarkup()}
			/>
		</div>
	);
};
Preview.propTypes = {
	content: PropTypes.string.isRequired,
};
export default Preview;
