import type { PageServerLoad } from './$types';
import data from '../../../../content/stud-dogs.json';

export const load: PageServerLoad = () => ({ studs: data.dogs });
