<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>Calendar — GSDCSTL</title>
</svelte:head>

<PageHeader title="Calendar" />

<iframe
	src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%239fb7a1&ctz=America%2FChicago&src=cnVmcHBobTFnZTZzcmpvaDhlcDM4bDFtODRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23506c53&showTz=0&showCalendars=0&showTabs=1&showNav=1&showDate=1"
	title="GSDCSTL Club Calendar"
	class="w-full rounded border border-gray-300"
	style="height: 600px;"
	frameborder="0"
	scrolling="no"
></iframe>
