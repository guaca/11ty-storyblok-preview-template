const { EleventyServerless } = require("@11ty/eleventy");

async function handler(event) {
	let elev = new EleventyServerless("preview", {
		path: event.path, // (required) the URL path
	});

	try {
		// returns the HTML for the Eleventy template that matches to the URL
		// Can use with `eleventyConfig.dataFilterSelectors` to put data cascade data into `page.data` here.
		let [page] = await elev.getOutput();
		let html = page.content;

		return {
			statusCode: 200,
			body: html,
		};
	} catch (e) {
		return {
			statusCode: 500,
			body: JSON.stringify({ error: e.message }),
		};
	}
}

exports.handler = handler;