<script>
	import { Badge, Button, Card, Hr, Li, List, Modal, P, Radio, Rating, Textarea } from 'flowbite-svelte';
	import { CheckCircleSolid } from 'flowbite-svelte-icons';
	import { reviewsStore } from "../stores";
	import { invalidateAll } from '$app/navigation';

	let showModal = false
	let currentText = ''
	let currentRating = 5

	function handleAddReview() {
		showModal = true
	}

	async function handleSaveReview() {
		if(currentRating < 5) {
			alert('Оценка ниже 5 не приветствуется')
			return
		}
		const res = await fetch('/api/v1/reviews', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				text: currentText,
				rating: currentRating,
			}),
		})

		if (res.status === 201) {
			invalidateAll()
		} else {
			console.log(res.body?.error)
		}

	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Docker demo app" />
</svelte:head>

<div class="container max-w-full ">
	<div class="grid grid-cols-1 gap-4 pt-5 px-5 lg:grid-cols-2">
		<div class="flex flex-col justify-center items-center">
			<h1>Докер - финальный аккорд</h1>
			<P class="my-3" weight="light" color="text-gray-500 dark:text-gray-400">С претензией на уровень "hell" сделаны 3 контейнера:</P>
			<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
				<Li icon>
					<CheckCircleSolid class="w-5 h-5 me-2 text-green-500 dark:text-green-400" />
					с базой данных (Mongodb) в одной подсети
				</Li>
				<Li icon>
					<CheckCircleSolid class="w-5 h-5 me-2 text-green-500 dark:text-green-400" />
					с nginx, который показывает красивое, во второй подсети
				</Li>
				<Li icon>
					<CheckCircleSolid class="w-5 h-5 me-2 text-green-500 dark:text-green-400" />
					с sveltekit приложением, которое предварительно собирается в отдельном контейнере, в обеих подсетях
				</Li>
			</List>
			<Hr classHr="w-48 h-1 mx-auto my-4 rounded md:my-6" />
			<h2 class="text-3xl">Функционал</h2>
			<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400 my-3">
				<Li icon>
					<CheckCircleSolid class="w-5 h-5 me-2 text-green-500 dark:text-green-400" />показывает картинку о своей структуре
				</Li>
				<Li icon>
					<CheckCircleSolid class="w-5 h-5 me-2 text-green-500 dark:text-green-400" />просит поставить оценку
				</Li>
				<Li icon>
					<CheckCircleSolid class="w-5 h-5 me-2 text-green-500 dark:text-green-400" />
					обижается, если оценка недостаточно хороша</Li>
			</List>
			<Button size="xl" class="mt-10 text-xl" pill on:click={handleAddReview}>Оценить</Button>
		</div>
		<img src="struct.svg" alt="structure">
	</div>
	
	<div class="grid grid-cols-2 gap-2 pt-9 px-5 lg:grid-cols-6">
		{#each $reviewsStore.reviews as review}
			<Card href="/">
				<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{review.reviewDate}</h5>
				<Rating rating={review.rating} size={24} class="mt-2.5 mb-5">
					<Badge slot="text" class="ms-3">{review.rating}</Badge>
				</Rating>
				<p>{review.text}</p>
				<!-- <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">{review.rating}</p> -->
			</Card>
		{/each}
	</div>
</div>

<Modal title="Добавить отзыв" bind:open={showModal} autoclose>
	<div class="flex gap-3">
		<Radio bind:group={currentRating} color="green" value=5>5</Radio>
		<Radio bind:group={currentRating} color="yellow" value=4>4</Radio>
		<Radio bind:group={currentRating} color="red" value=3>3</Radio>
		<Radio bind:group={currentRating} value=2 disabled>2</Radio>
	</div>
	<Textarea
		id="textarea-comment-id"
		placeholder="Что вы думаете?"
		rows="4"
		name="comment"
		bind:value={currentText}
	/>
	<svelte:fragment slot="footer">
		<Button on:click={handleSaveReview}>Подтвердить</Button>
		<Button color="alternative">Отмена</Button>
	</svelte:fragment>
</Modal>
