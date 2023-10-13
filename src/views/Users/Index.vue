<template>
	<AdminLayout>	
    <div class="col-span-3 lg:col-span-10 py-6 sm:px-6 lg:px-8">
      <div class="flex justify-end pb-6">
          <router-link to="/admin/users/add" class="btn btn-blue">Ajouter un utilisateur</router-link>   
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">  
        <Tlist></Tlist>
        <Tlist></Tlist>
        <Tlist></Tlist>
        <Tlist></Tlist>
        <Tlist></Tlist>
      </div>
    </div>		
</AdminLayout>
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