# Sveltia CMS Integration

Sveltia CMS provides a browser-based admin UI at `/admin`. Editors authenticate with GitHub, edit content in a WYSIWYG interface, and the CMS commits changes back to the repo. The existing GitHub Actions pipeline then rebuilds and deploys the site automatically — no manual deploys needed.

---

## Manual Prerequisites (one-time setup, outside the codebase)

1. **Register a GitHub OAuth App** at GitHub → Settings → Developer settings → OAuth Apps
   - Homepage URL: `https://gsdcstl.org`
   - Authorization callback URL: `https://<your-worker>.workers.dev/callback`
   - Note the **Client ID** and **Client Secret**

2. **Deploy `sveltia-cms-auth`** to Cloudflare Workers (free tier)
   - Repo: https://github.com/sveltia/sveltia-cms-auth
   - Set the Client ID and Client Secret as Worker environment variables per its README
   - Note the Worker URL (e.g. `https://sveltia-cms-auth.yourname.workers.dev`)

3. **Update `static/admin/config.yml`** — replace `https://YOUR_WORKER.workers.dev` with the Worker URL from step 2

---

## Dependencies to Install

```bash
npm install gray-matter marked
```

- `gray-matter` — parses YAML frontmatter from `.md` files at build time
- `marked` — renders Markdown body to an HTML string

---

## Content Files to Create

All client-editable content moves into a new `content/` directory at the repo root. SvelteKit reads these files at build time; Sveltia CMS writes to them via the GitHub API when the client saves.

### `content/pages/` — one file per page

**`content/pages/home.md`**
```markdown
---
title: About Us
---
The members of the German Shepherd Dog Club of St. Louis, Inc. would like to introduce
ourselves to you and invite you to come meet us.

## Who We Are

The club was formed to encourage and promote the breeding of German Shepherd Dogs and to
bring their natural qualities to perfection. We urge members to accept the
[AKC](https://www.akc.org) standard as the only standard of excellence; to protect and
advance the interests of the breed; and to encourage sportsmanlike competition at dog
shows and companion dog events.

Our membership is made up of anyone interested in the German Shepherd Dog — breeders,
obedience enthusiasts, herding and rally competitors, and dog lovers alike.

## Our Activities

- 8–10 club meetings per year
- At least 2 specialty shows annually
- Obedience and rally trials
- Seminars on obedience, tracking, grooming, health, and breeding
```

**`content/pages/events.md`**
```markdown
---
title: Events
event_flyer: /images/event-flyer-may25.jpg
---
Please click Show Premium for specialty entries, Temperament Test and info. for the
Midwest Futurity.
```

**`content/pages/calendar.md`**
```markdown
---
title: Regular GSDCSTL Meetings
---
- **Schedule:** Held the **3rd Tuesday of each month**, except October and December.
- **October:** Club picnic and puppy match (location may vary).
- **December:** Club Christmas party (location may vary).
- **Start time:** 7:00 p.m.

## Location

Pacific Lions Club  
319 W. Meramec  
Pacific, MO 63069

**Directions:** From W. Osage Street, take 4th Street approximately 4 blocks, then turn
left on Meramec.

*Visitors and German Shepherds are welcome!*
```

**`content/pages/membership.md`**
```markdown
---
title: How to Join
---
We welcome anyone interested in the German Shepherd Dog. To become a member of the
German Shepherd Dog Club of St. Louis, Inc.:

1. Obtain a membership application (link below).
2. Submit the application with two sponsors to the recording secretary or a club officer at a meeting.
3. Pay yearly dues: **$30 individual** or **$50 household**.
4. Sign the guest book at a club meeting.
5. Application is read at the next two club meetings.
6. A vote on membership is taken at the second reading (2/3 affirmative required).
```

---

### `content/contacts.json` — structured officer/board data

```json
{
  "year": "2025",
  "phone": "636-495-5864",
  "officers": [
    { "title": "President", "name": "Jayne Faupl", "email": "President@gsdcstl.org" },
    { "title": "Vice President", "name": "Laura Shearin", "email": "VicePresident@gsdcstl.org" },
    { "title": "Treasurer", "name": "Pam Aman", "email": "Treasurer@gsdcstl.org" },
    { "title": "Recording Secretary", "name": "Laura Marrocco", "email": "RecSec@gsdcstl.org" },
    { "title": "Corresponding Secretary", "name": "Linda VanVickle", "email": "CorrSec@gsdcstl.org" }
  ],
  "board": [
    { "name": "Steve Dobbins" },
    { "name": "Larry Duerbeck" },
    { "name": "Margaret O'Neill" },
    { "name": "Brian Paschke" },
    { "name": "Butch Stiefferman (past president)" }
  ]
}
```

---

### `content/brags/` — one file per brag entry

File naming convention: `YYYY-MM-DD-slug.md`. Seed with these 8 existing entries:

**`content/brags/2019-02-09-ruger.md`**
```markdown
---
title: "BOF CH Faithrock Wyatt Earp v Tin Roof RN TC — \"Ruger\""
date: 2019-02-09
image: /images/bof-ch-faithrock-wyatt-earp-v-tin-roof-rn-tc.jpg
---
February 9, 2019 — Ruger finishing his championship in Indianapolis under judge Karen Hynek
with his 3rd major. Thank you Jeffrey Pyle for handling Ruger.

**Sire:** RBIS GCHB Class Act's Shot Through The Heart Windfall-Hillside RN CGC TC "Jovi"  
**Dam:** FaithRock You've Got A Friend "Kelly"  
**Bred by:** Terry and Larry Rock and Rita Rooney  
**Owned by:** Laura and Tony Marrocco and Terry Rock
```

**`content/brags/2019-03-23-jackson.md`**
```markdown
---
title: "Valleyview Faith Rock Remember When — \"Jackson\""
date: 2019-03-23
image: /images/jackson-wd-bow-march19-futurity.jpg
---
3/23/19 — Thank you judge Steve Bloom for awarding Jackson Winner's Dog and Best of Winners
from the 6–9 puppy class.

3/24/19 — Thank you to judge Richard Lortie for awarding Jackson Best Male and Best Opposite
Futurity. Thank you Liv Calabrese for expertly handling Jackson.

**Sire:** AM GCH CH/CAN CH Fathrock Caralon Good Vibrations, CD, RN, CHIC, HIC, TC, DM Clear (frozen semen)  
**Dam:** Valley View Hugs and Kisses  
**Bred by:** Christine Leeka & Terry Rock  
**Owned by:** Terry & Larry Rock and Christine Leeka
```

**`content/brags/2019-04-06-baretta.md`**
```markdown
---
title: "Baretta"
date: 2019-04-06
image: /images/baretta-wb-bow-april-6-7-19.jpg
---
4/7/2019 — Back to back Winners Bitch & Best of Winners for Baretta this weekend!

4/6/2019 — Yesterday was a point and today was a 3 pt major!! Thank you judges Houston Clark
and Jon Cole! Elizabeth Renee Stiefferman handled her to winners bitch and Kara Janiszak
covered her in Breed!

Baretta is owned by Gail Stiefferman, Deborah Stern and Herman Stiefferman. Bred by Sandy
Anderson & Jason Duin. So proud of our 20 month old girl!!!
```

**`content/brags/2019-04-06-hazel.md`**
```markdown
---
title: "Group Placing Can. Sel. BOF RMB MBISS BPIS MBPISS CH Forest Knolls Hazelnut V Winsome — \"Hazel\""
date: 2019-04-06
image: /images/hazel-group-two-april-6-19.jpg
---
4/6/2019 — Hazel goes Herding Group 2!

Thank you judges Mr. Houston Clark (Breed) and Mr. Jon Cole (Group)!

**Owner/Breeder/Handler:** Elizabeth Renee Stiefferman  
**Co-Breeders:** Frank & Kris Fasano, Gail Stiefferman, Scott C Hotaling, Herman Stiefferman
```

**`content/brags/2019-04-06-blondie.md`**
```markdown
---
title: "CH Guardians Gold Medal V Rochill OFA H/E/TH — \"Blondie\""
date: 2019-04-06
image: /images/blondie-brag.jpg
---
**Breeder/Owners:** Jayne Faupl & Julia Foster  
**Handler:** Julia Foster-Hess  
**Sire:** GCH Rochills Jax V Guardian Farm HSAds HXAs CA  
**Dam:** Guardians Olympic Gold V Rochill OFA H/E

- Paducah KC — 4/6/19 Select Bitch under Houston Clark
- Paducah KC — 4/7/19 Select Bitch under Jon Cole
- Janesville Beloit KC — 5/4/19 Best Op under R.E. Lake
- Badgerland KC — 5/3/19 Select Bitch under Sulie Greendale-Paveza
- Badgerland KC — 5/5/19 Select Bitch under Linda Robey
- Illinois Valley KC of Peoria — 5/24/19 Best of Breed under Mrs. D. L. Melgreen
- Mid Del Tinker KC — 6/8/19 Select Bitch (major) under Patricia Trotter
- Lawton Dog Fanciers — 6/29/19 Best Op (major) under W. C. Stebbins
- Waukesha KC — 7/27/19 Select Bitch (major) under Michael Gelinas
- Waukesha KC — 7/28/19 Select Bitch (major) under Marilyn Van Vleidt
```

**`content/brags/2019-05-03-vee.md`**
```markdown
---
title: "Guardians 2Kiss A Thief V Rochill — \"Vee\""
date: 2019-05-03
image: /images/vee-brag.jpg
---
**Owners:** Jayne Faupl & Julia Foster  
**Breeders:** Jayne Faupl, Julia Foster-Hess, Laura Shearin  
**Sire:** CH Charbo Jalyn's Xtortionist Tanbark Lauguin OFA H/E  
**Dam:** CH Guardians Gold Medal V Rochill OFA H/E/Th

- Janesville Beloit KC — 5/4/19 1st 6–9 month puppy, reserve winner's bitch under R. E. Lake
- Badgerland KC — 5/3/19 1st 6–9 month puppy under Sulie Greendale-Paveza
- Badgerland KC — 5/5/19 1st 6–9 month puppy under Linda Robey
- Illinois Valley KC of Peoria — 5/26/19 1st 6–9 month puppy, reserve winner's bitch under James Moses
- Waukesha KC — 7/27/19 1st 9–12 month puppy under Michael Gelinas
- Waukesha KC — 7/28/19 1st 9–12 month puppy under Marilyn Van Vleit
```

**`content/brags/2019-05-12-bruno.md`**
```markdown
---
title: "Faithrock Maverick — \"Bruno\""
date: 2019-05-12
image: /images/bruno-bob-gsdcstl-5.12.19.jpg
---
May 12, 2019 — Bruno was awarded Winner's, Best of Winners and Best of Breed at the GSDCSTL
Spring Specialty @ Purina Farms under judge Christie Halliday. Bruno needs one more major to
finish his CH. Thank you Diane Brown and Larry Rock for handling Bruno.

**Sire:** RBIS GCHB Class Act's Shot Through The Heart Windfall-Hillside RN CGC TC "Jovi"  
**Dam:** FaithRock You've Got A Friend "Kelly"  
**Bred by:** Terry and Larry Rock and Rita Rooney  
**Owned by:** Linda Swan Van Vickel and Terry Rock
```

**`content/brags/2019-05-27-noelle.md`**
```markdown
---
title: "Guardians NoNo Noelle V Rochill — \"Noelle\""
date: 2019-05-27
image: /images/noelle-brag.jpg
---
**Breeder/Owners:** Jayne Faupl, Julia Foster-Hess  
**Sire:** CH George Creeks Out of This World OFA H/E/Th  
**Dam:** CH Guardians Gold Medal V Rochill OFA H/E/Th

- Corn Belt KC — 5/27/19 1st 6–9 month puppy, Reserve winner's bitch under Cindy Meyer
- German Shepherd Dog Club of Greater KC — 6/8/19 1st 6–9 month puppy, Best Puppy under Randy Chestnut
- Lawton Dog Fanciers — 6/29/19 1st 6–9 month puppy, (major) reserve winners bitch under W. C. Stebbins
```

---

## SvelteKit Load Functions

### Pattern A — Single Markdown page

Used for: `home`, `events`, `calendar`, `membership`

```ts
// Example: src/routes/events/+page.ts
import type { PageLoad } from './$types';
import matter from 'gray-matter';
import { marked } from 'marked';
import raw from '../../../content/pages/events.md?raw';

export const load: PageLoad = () => {
  const { data, content } = matter(raw);
  return { ...data, body: marked.parse(content) as string };
};
```

The corresponding `.svelte` page receives `data.title`, `data.event_flyer`, and `data.body` as props and renders `{@html data.body}` in place of the hardcoded HTML.

### Pattern B — Contacts JSON

```ts
// src/routes/club-info/club-contacts/+page.ts
import contacts from '../../../../content/contacts.json';
export const load = () => ({ contacts });
```

The `.svelte` page iterates `data.contacts.officers` and `data.contacts.board`.

### Pattern C — Brags folder collection

```ts
// src/routes/brags/+page.ts
import type { PageLoad } from './$types';
import matter from 'gray-matter';
import { marked } from 'marked';

const files = import.meta.glob(
  '../../../content/brags/*.md',
  { query: '?raw', import: 'default', eager: true }
);

export const load: PageLoad = async () => {
  const brags = await Promise.all(
    Object.values(files).map(async (raw) => {
      const { data, content } = matter(raw as string);
      return { ...data, body: marked.parse(content) as string };
    })
  );
  brags.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return { brags };
};
```

The `.svelte` page loops over `data.brags`, rendering the optional image, the `title`, and `{@html brag.body}`.

---

## CMS Admin Files

### `static/admin/index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Content Manager — GSDCSTL</title>
  </head>
  <body>
    <script src="https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js"></script>
  </body>
</html>
```

### `static/admin/config.yml`

```yaml
backend:
  name: github
  repo: fjord-works-software/gsdcstl
  branch: main
  base_url: https://YOUR_WORKER.workers.dev  # replace after OAuth setup

media_folder: static/images/uploads
public_folder: /images/uploads

collections:
  - name: brags
    label: Brags
    label_singular: Brag
    folder: content/brags
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - label: Title
        name: title
        widget: string
        hint: "Full registered name and nickname, e.g. CH Guardians Gold Medal — 'Blondie'"
      - label: Date
        name: date
        widget: date
        format: YYYY-MM-DD
      - label: Photo
        name: image
        widget: image
        required: false
      - label: Content
        name: body
        widget: markdown
        hint: "Include pedigree info (sire, dam, owners), show results, and any other details"

  - name: pages
    label: Pages
    files:
      - label: Home Page
        name: home
        file: content/pages/home.md
        fields:
          - { label: Title, name: title, widget: string }
          - { label: Content, name: body, widget: markdown }

      - label: Events
        name: events
        file: content/pages/events.md
        fields:
          - { label: Title, name: title, widget: string }
          - label: Event Flyer Image
            name: event_flyer
            widget: image
            required: false
            hint: "Upload the current event flyer"
          - { label: Description, name: body, widget: markdown }

      - label: Regular Meetings
        name: calendar
        file: content/pages/calendar.md
        fields:
          - { label: Title, name: title, widget: string }
          - { label: Content, name: body, widget: markdown }

      - label: How to Join (Membership)
        name: membership
        file: content/pages/membership.md
        fields:
          - { label: Title, name: title, widget: string }
          - { label: Content, name: body, widget: markdown }

  - name: contacts
    label: Club Contacts
    files:
      - label: Officers & Board
        name: contacts
        file: content/contacts.json
        format: json
        fields:
          - { label: Year, name: year, widget: string }
          - { label: Club Phone, name: phone, widget: string }
          - label: Officers
            name: officers
            widget: list
            label_singular: Officer
            fields:
              - { label: Title, name: title, widget: string }
              - { label: Name, name: name, widget: string }
              - { label: Email, name: email, widget: string }
          - label: Board of Directors
            name: board
            widget: list
            label_singular: Board Member
            fields:
              - { label: Name, name: name, widget: string }
```

---

## Files Changed Summary

| Action | File |
|--------|------|
| Create | `content/pages/home.md` |
| Create | `content/pages/events.md` |
| Create | `content/pages/calendar.md` |
| Create | `content/pages/membership.md` |
| Create | `content/contacts.json` |
| Create | `content/brags/2019-02-09-ruger.md` |
| Create | `content/brags/2019-03-23-jackson.md` |
| Create | `content/brags/2019-04-06-baretta.md` |
| Create | `content/brags/2019-04-06-hazel.md` |
| Create | `content/brags/2019-04-06-blondie.md` |
| Create | `content/brags/2019-05-03-vee.md` |
| Create | `content/brags/2019-05-12-bruno.md` |
| Create | `content/brags/2019-05-27-noelle.md` |
| Create | `static/admin/index.html` |
| Create | `static/admin/config.yml` |
| Create | `src/routes/+page.ts` |
| Create | `src/routes/events/+page.ts` |
| Create | `src/routes/calendar/regular-meetings/+page.ts` |
| Create | `src/routes/club-info/club-membership/+page.ts` |
| Create | `src/routes/club-info/club-contacts/+page.ts` |
| Create | `src/routes/brags/+page.ts` |
| Update | `src/routes/+page.svelte` |
| Update | `src/routes/events/+page.svelte` |
| Update | `src/routes/calendar/regular-meetings/+page.svelte` |
| Update | `src/routes/club-info/club-membership/+page.svelte` |
| Update | `src/routes/club-info/club-contacts/+page.svelte` |
| Update | `src/routes/brags/+page.svelte` |

---

## Verification

1. `npm run build` — should complete with no TypeScript errors and no broken prerender links
2. `npm run preview` — visit each migrated page and confirm content renders correctly
3. Navigate to `/gsdcstl/admin` locally — Sveltia CMS UI should load
4. After OAuth setup: log in, confirm all 3 collections appear with correct fields, create a test brag and verify the commit triggers a deploy
