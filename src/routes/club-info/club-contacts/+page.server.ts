import type { PageServerLoad } from './$types';
import contacts from '../../../../content/contacts.json';

export const load: PageServerLoad = () => ({ contacts });
