import type { PageServerLoad } from './$types';
import data from '../../../../content/hall-of-fame.json';

export const load: PageServerLoad = () => ({ rows: data.entries });
