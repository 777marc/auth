<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let data = [];

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
		} else {
			goto('/auth/login');
		}
	});
</script>

<h1>User Profile</h1>
{JSON.stringify(data)}
