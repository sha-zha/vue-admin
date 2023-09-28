<template>
	<AdminLayout/>	
<main>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div class="flex justify-end pb-6">
          <router-link to="/admin/users/add" class="btn btn-blue">Ajouter un utilisateur</router-link>   
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        <div class="bg-gray-100 rounded-md p-6">
        <Tlist></Tlist>
       
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
    <router-link :to="{name: 'userShow', params: {id:1}}" class="font-bold">Voir plus</router-link> 
    <router-link :to="{name: 'userEdit', params: {id:1}}" class="font-bold">Editer</router-link>
    <a class="text-rose-700 font-bold">Supprimer</a>    
</div>
        </div>
</div>
    </div>
  </main>		
</template>

<script type="text/javascript">
import AdminLayout from "../AdminLayout.vue";
import Tlist from "../../components/Tlist.vue";

	export default {
		name: "UserIndex",
		components:{
			Tlist,
			AdminLayout
		}
	}
</script>