export type NavItem = {
	label: string;
	href?: string;
	children?: NavItem[];
};

export const navItems: NavItem[] = [
	{ label: 'Home', href: '/' },
	{
		label: 'Club Info',
		href: '/club-info',
		children: [
			{ label: 'Constitution & By-Laws', href: '/club-info/constitution-by-laws' },
			{ label: 'Club Contacts', href: '/club-info/club-contacts' },
			{ label: 'Club Membership', href: '/club-info/club-membership' }
		]
	},
	{
		label: 'Calendar',
		href: '/calendar',
		children: [{ label: 'Regular GSDCSTL Meetings', href: '/calendar/regular-meetings' }]
	},
	{ label: 'Education', href: '/education' },
	{
		label: 'Events',
		href: '/events',
		children: [
			{ label: 'Show Premium', href: '/events/show-premium' },
			{ label: 'Event Results', href: '/events/event-results' }
		]
	},
	{
		label: 'Brags',
		href: '/brags',
		children: [
			{ label: 'Hall of Fame', href: '/brags/hall-of-fame' },
			{ label: "Wag 'N' Tongue", href: '/brags/wag-n-tongue' },
			{ label: 'Royal Hecht Awards', href: '/brags/royal-hecht-awards' }
		]
	},
	{
		label: 'Photo Gallery',
		href: '/photo-gallery',
		children: [
			{ label: 'Gallery 1', href: '/photo-gallery/gallery-1' },
			{ label: 'Gallery 2', href: '/photo-gallery/gallery-2' },
			{ label: 'Gallery 3', href: '/photo-gallery/gallery-3' },
			{ label: 'Gallery 4', href: '/photo-gallery/gallery-4' }
		]
	},
	{
		label: 'Breeders',
		href: '/breeders',
		children: [
			{ label: 'Stud Dogs', href: '/breeders/stud-dogs' },
			{ label: 'Whelping Box', href: '/breeders/whelping-box' }
		]
	},
	{
		label: 'Links',
		href: '/links',
		children: [
			{ label: 'Rainbow Bridge', href: '/links/rainbow-bridge' },
			{ label: 'Web Award', href: '/links/web-award' },
			{ label: 'Veterinary Links', href: '/links/veterinary-links' }
		]
	}
];
