import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type Plugin } from 'vite';

// The CMS admin is a plain static file (static/admin/index.html). A production
// host resolves /admin/ to that index; Vite's dev static handler does not, so
// serve it explicitly to keep the dev and deployed URLs identical.
const adminIndex = (): Plugin => ({
	name: 'admin-index',
	apply: 'serve',
	enforce: 'pre',
	configureServer(server) {
		server.middlewares.use((req, _res, next) => {
			if (req.url) {
				const [path, query] = req.url.split('?');
				if (path === '/admin' || path === '/admin/') {
					req.url = '/admin/index.html' + (query ? `?${query}` : '');
				}
			}
			next();
		});
	}
});

export default defineConfig({ plugins: [tailwindcss(), sveltekit(), adminIndex()] });
