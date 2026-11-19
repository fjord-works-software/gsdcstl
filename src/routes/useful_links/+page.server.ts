import { redirect } from '@sveltejs/kit';
import { resolve } from '$app/paths';
import type { PageServerLoad } from './$types';

// Legacy bookmark compat: the old Artisteer site served this page at
// /useful_links/. Redirect it to the current /links route.
// trailingSlash makes the prerender emit useful_links/index.html, matching the old URL.
export const trailingSlash = 'always';

export const load: PageServerLoad = () => {
	throw redirect(308, resolve('/links'));
};
