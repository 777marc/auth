<script>
	import { goto } from '$app/navigation';

	import { post, browserSet } from '$lib/req_utils';

	let email = '';
	let password = '';

	async function login() {
		const res = await post(fetch, 'http://localhost:3001/api/users/signin', {
			email,
			password
		});

		if (res.ok) {
			let data = await res.json();
			browserSet('jwt', data.token);
			goto('/dashboard');
		}
	}
</script>

<div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
	<div class="mb-4">
		<label class="block text-grey-darker text-sm font-bold mb-2" for="username"> Username </label>
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
			id="username"
			type="text"
			placeholder="Username"
			bind:value={email}
		/>
	</div>
	<div class="mb-6">
		<label class="block text-grey-darker text-sm font-bold mb-2" for="password"> Password </label>
		<input
			class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
			id="password"
			type="password"
			placeholder="******************"
			bind:value={password}
		/>
		<p class="text-red text-xs italic">Please choose a password.</p>
	</div>
	<div class="flex items-center justify-between">
		<button
			on:click={login}
			class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
			type="button"
		>
			Sign In
		</button>
		<a
			class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
			href="/auth/forgotpassword"
		>
			Forgot Password?
		</a>
	</div>
</div>
