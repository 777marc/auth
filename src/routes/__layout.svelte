<script>
	import '../tailwind.css';
	let current = 'dashboard';
	let active =
		'inline-block border border-white rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white';
	let inactive =
		'inline-block border border-white bg-gray-400 text-white rounded hover:border-gray-200 hover:bg-gray-200 py-2 px-4';
</script>

<div class="w-full min-h-screen bg-gray-200 px-10 md:px-20 lg:px-52 py-20">
	<ul class="flex justify-between pb-8">
		<li class="mr-3">
			<a
				class={current === 'dashboard' ? active : inactive}
				on:click={() => (current = 'dashboard')}
				href="/">home</a
			>
		</li>
		<li class="mr-3">
			<a
				class={current === 'profile' ? active : inactive}
				on:click={() => (current = 'profile')}
				href="/user">profile</a
			>
		</li>
		<li class="mr-3">
			<a
				class={current === 'login' ? active : inactive}
				on:click={() => (current = 'login')}
				href="/auth/login">login</a
			>
		</li>
	</ul>

	<slot />
</div>
