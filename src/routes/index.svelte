<script>
	import { onMount } from 'svelte';

	let data = [];
	let name = '';

	onMount(async () => {
		const token = localStorage.getItem('jwt');
		let headers = {};
		if (token) {
			headers['Authorization'] = `Bearer ${token}`;
		}
		const res = await fetch(`http://localhost:3001/api/users/currentuser`, { headers });
		if (res.ok) {
			data = await res.json();
			name = data.currentUser.name;
		}
	});
</script>

<h1>profile page</h1>
{name}
