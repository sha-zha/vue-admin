<template>
	<AdminLayout>
		<div class="col-span-3 lg:col-span-10 py-6 sm:px-6 lg:px-8">
		
		<div class="flex justify-end pb-6">
        <router-link to="/admin/users/add" class="btn bg-pink-400 text-white">Créer une annonce</router-link>   
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<Product :action="true"></Product>
			<Product :action="true"></Product>
			<Product :action="true"></Product>
			<Product :action="false"></Product>
			<Product :action="false"></Product>
			<Product :action="false"></Product>
	</div>
		</div>
	</AdminLayout>		
</template>

<script type="text/javascript">
import AdminLayout from "../AdminLayout.vue";
import Product from "../../components/Product.vue";

	export default {
		name: "PostIndex",
		components: {
			AdminLayout,
			Product
		}
	}
</script>