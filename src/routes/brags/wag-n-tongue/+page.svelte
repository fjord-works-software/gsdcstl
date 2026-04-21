<script lang="ts">
	import { base } from '$app/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
	const newsletters = [
		{ label: 'January 2018', file: 'January 2018 wag.pdf' },
		{ label: 'August 2017', file: 'August 2017 wag.pdf' },
		{ label: 'February 2017', file: 'february 2017 wag.pdf' },
		{ label: 'November 2016', file: 'November 2016 wag.pdf' },
		{ label: 'February 2016', file: 'february 2016 wag.pdf' },
		{ label: 'September 2015', file: 'September 2015 WAG.pdf' },
		{ label: 'June 2015', file: 'June 2015 WAG.pdf' },
		{ label: 'August 2014', file: 'August 2014 WAG.pdf' },
		{ label: 'December 2014', file: 'December 2014 wag.pdf' },
		{ label: 'August 2013', file: 'AUGUST 2013 WAG.pdf' },
		{ label: 'May 2013', file: 'May 2013 WAG.pdf' },
		{ label: 'October 2012', file: 'OCTOBER 2012 WAGa.pdf' },
		{ label: 'August 2012', file: 'AUGUST 2012 WAGa.pdf' },
		{ label: 'April 2012', file: 'APRIL 2012 WAGa.pdf' },
		{ label: 'February 2012', file: 'FEBRUARY 2012 WAG.pdf' },
		{ label: 'October 2011', file: 'OCTOBER 2011 WAG.pdf' },
		{ label: 'August 2011', file: 'August 2011 WAG2.pdf' },
		{ label: 'February 2011', file: 'FEBRUARY 2011 WAG.pdf' },
		{ label: 'September 2010', file: 'Sept-2010-WAG.pdf' },
		{ label: 'April 2010', file: 'April-2010-WAG.pdf' },
		{ label: 'August 2008', file: 'August 2008 Wag.pdf' },
		{ label: 'December 2007', file: 'December 2007 WAG.pdf' },
		{ label: 'September 2007', file: 'September 2007 WAG.pdf' },
		{ label: 'November–December 2000', file: 'November December 2000 WAG.pdf' },
		{ label: 'September–October 2000', file: 'September October 2000 WAG.pdf' },
		{ label: 'July–August 2000', file: 'July August 2000 WAG.pdf' },
		{ label: 'March–April 2000', file: 'March April 2000 WAG.pdf' },
		{ label: 'January–February 2000', file: 'January February 2000 WAG.pdf' },
		{ label: 'July–August 2001', file: 'July August 2001 WAG.pdf' },
		{ label: 'March–June 2001', file: 'March June 2001 WAG.pdf' },
		{ label: 'January–February 2001', file: 'January February 2001 WAG.pdf' },
		{ label: 'January–February 1993', file: 'January February 1993 Wag.pdf' },
		{ label: 'October 1990', file: 'October 1990 Wag.pdf' },
		{ label: 'August 1990', file: 'August 1990 Wag.pdf' },
		{ label: 'July 1990', file: 'July 1990 Wag.pdf' },
		{ label: 'June 1990', file: 'June 1990 Wag.pdf' },
		{ label: 'May 1990', file: 'May 1990 Wag.pdf' },
		{ label: 'April 1990', file: 'April 1990 Wag.pdf' },
		{ label: 'February 1990', file: 'February 1990 Wag.pdf' },
		{ label: 'January 1990', file: 'January 1990 Wag.pdf' },
		{ label: 'November 1989', file: 'November 1989 Wag.pdf' },
		{ label: 'October 1989', file: 'October 1989 Wag.pdf' },
		{ label: 'September 1989', file: 'September 1989 Wag.pdf' },
		{ label: 'July 1989', file: 'July 1989 Wag.pdf' },
		{ label: 'June 1989', file: 'June 1989 Wag.pdf' },
		{ label: 'May 1989', file: 'May 1989 Wag.pdf' },
		{ label: 'April 1989', file: 'April 1989 Wag.pdf' },
		{ label: 'March 1989', file: 'March 1989 Wag.pdf' },
		{ label: 'November 1988', file: 'November 1988 Wag.pdf' },
		{ label: 'October 1988', file: 'October 1988 Wag.pdf' },
		{ label: 'September 1988', file: 'September 1988 Wag.pdf' },
		{ label: 'July 1988', file: 'July 1988 Wag.pdf' },
		{ label: 'June 1988', file: 'June 1988 Wag.pdf' },
		{ label: 'May 1988', file: 'May 1988 Wag.pdf' },
		{ label: 'December 1988', file: 'December 1988 Wag.pdf' },
		{ label: 'March 1987', file: 'March 1987 Wag.pdf' },
		{ label: 'February 1987', file: 'February 1987 Wag.pdf' },
		{ label: 'January 1987', file: 'January 1987 Wag.pdf' },
		{ label: 'April 1987', file: 'April 1987 Wag.pdf' },
		{ label: 'December 1986', file: 'December 1986 Wag.pdf' },
	];
</script>

<svelte:head>
	<title>Wag 'N' Tongue — GSDCSTL</title>
</svelte:head>

<PageHeader title="Wag 'N' Tongue" subtitle="Club newsletter archive — 1986 to 2018" />

<ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm">
	{#each newsletters as n}
		<li>
			<a
				href="{base}/Documents/Wags/{n.file}"
				class="block p-2 rounded border border-gray-200 hover:border-primary hover:text-primary transition-colors text-gray-700"
				target="_blank"
				rel="noopener"
			>
				{n.label}
			</a>
		</li>
	{/each}
</ul>
