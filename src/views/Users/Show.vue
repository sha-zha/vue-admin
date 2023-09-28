<template>
	<AdminLayout/>	
<main>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
    <div class="flex justify-end w-full pb-6">
<router-link  :to="{name: 'userEdit', params: {id:1}}" class="btn p-2">Modifier</router-link>	
</div>
<div class="bg-gray-100 rounded-md p-6">
	<ul class="list-none">
		<li>Identité: Nom prénom</li>
		<li>Email: Email</li>
		<li>Nombre de checkpoints effectué: </li>
	</ul>
</div>
    </div>
  </main>		
</template>

<script type="text/javascript">
import AdminLayout from "../AdminLayout.vue";
	export default {
		name: "UserShow",
		components:{
			AdminLayout
		}
	}
</script>