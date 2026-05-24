import type { PageServerLoad } from './$types';
import data from '../../../../content/wag-n-tongue.json';

export const load: PageServerLoad = () => ({ newsletters: data.newsletters });
