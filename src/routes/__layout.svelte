<script>
	import '../tailwind.css';
</script>

<div class="w-full min-h-screen bg-gray-200 px-10 md:px-20 lg:px-52 py-20">
	<ul class="flex justify-between pb-8">
		<li class="mr-3">
			<a
				class="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
				href="/">home</a
			>
		</li>
		<li class="mr-3">
			<a
				class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
				href="/user">profile</a
			>
		</li>
		<li class="mr-3">
			<a class="inline-block py-2 px-4 text-gray-400 cursor-not-allowed" href="/auth/login">login</a
			>
		</li>
	</ul>

	<slot />
</div>
