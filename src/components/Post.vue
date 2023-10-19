<template>
	<div class="p-3 space-y-6 text-center shadow-xl">
			<img src="../assets/posts/chat.png">
			<ul>
				<li class="text-orange-500">Nom: Nuage</li>
				<li class="text-rose-700">Race: Europpéen</li>
				<li>Type: Chat</li>
				<li>recherche un vol dès le : 10 novembre 2023</li>
			</ul>		
			<p>Nuage cherche une place pour rejoindre sa famille </p>

			<div v-if="action === true" class="flex flex-wrap justify-evenly">
				<a href="#" class="btn btn-orange">Modifier</a>
				<a href="#" class="btn btn-pink">Archiver l'annonce</a>
			</div>

			<div v-else class="flex flex-wrap justify-center">
				<a href="#" class="btn btn-orange">Aider Nuage</a>
			</div>		
	</div>
</template>

<script>
export default {
	name: "PostVue",
	props:{
		action: Boolean 
	}
}
</script>		