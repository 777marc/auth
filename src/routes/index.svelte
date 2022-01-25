<script>
	import { onMount } from 'svelte';

	let data = [];

	onMount(async () => {
		const res = await fetch(`http://localhost:3001/api/users/currentuser`);
		data = await res.json();
	});
</script>

<h1>profile page</h1>
{JSON.stringify(data)}
