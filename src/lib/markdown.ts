import { Marked } from 'marked';

/**
 * Shared Markdown renderer for CMS content.
 *
 * `breaks: true` turns a single line break into <br>, which is what editors
 * expect when they press Enter in the CMS (e.g. Sire / Dam / Breeder lines),
 * rather than having those lines run together into one paragraph.
 */
export const marked = new Marked({ gfm: true, breaks: true });
