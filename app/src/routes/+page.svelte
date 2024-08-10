<script>
	import { Badge, Card, Rating } from 'flowbite-svelte';
	import { reviewsStore } from "../stores";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Docker demo app" />
</svelte:head>

<div class="container max-w-full ">
	<div class="grid grid-cols-1 gap-4 pt-5 px-5 lg:grid-cols-2">
		<div class="">
			<h3>App</h3>
			<h3>NGINX</h3>
			<h3>MongoDB</h3>
		</div>
		<img src="struct.svg" alt="structure">
	</div>
	
	<div class="grid grid-cols-2 gap-2 pt-5 px-5 lg:grid-cols-4">
		{#each $reviewsStore.reviews as review}
			<Card href="/">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{review.text}</h5>
				<Rating rating={review.rating} size={24} class="mt-2.5 mb-5">
					<Badge slot="text" class="ms-3">{review.rating}</Badge>
				</Rating>
				<!-- <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">{review.rating}</p> -->
			</Card>
		{/each}
	</div>
</div>
