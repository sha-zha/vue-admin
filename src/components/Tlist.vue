<template>
<div class="bg-gray-100 rounded-md p-6">
<ul class="list-none py-6 flex flex-col flex-wrap">
	<li>Nom: Doe</li>
	<li>Prénom: John</li>
	<li>email: john.doe@gmail.com</li>
</ul>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
    <router-link :to="{name: 'userShow', params: {id:1}}" class="font-bold">Voir plus</router-link> 
    <router-link :to="{name: 'userEdit', params: {id:1}}" class="font-bold">Editer</router-link>
    <a class="text-rose-700 font-bold">Supprimer</a>    
</div>
</div>
</template>

<script type="text/javascript">
	export default {
		name: "TList",
	} 
</script>