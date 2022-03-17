// import adapter from '@sveltejs/adapter-static';
import azure from 'svelte-adapter-azure-swa';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: azure(),
		prerender: {
			default: true,
		}
	}
};

export default config;
