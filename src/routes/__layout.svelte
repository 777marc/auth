<script>
	import '../tailwind.css';
</script>

<div class="w-full min-h-screen bg-gray-200 px-10 md:px-20 lg:px-52 py-20">
	<nav>
		<a class="p-2" href="/">Home</a>
		<a class="p-2" href="/auth/login">Login</a>
		<a class="p-2" href="/profile">Profile</a>
	</nav>

	<slot />
</div>
