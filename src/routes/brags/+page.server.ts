import type { PageServerLoad } from './$types';
import { brags } from '$lib/brags';

export const load: PageServerLoad = () => ({ brags });
