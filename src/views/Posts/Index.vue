<template>
	<AdminLayout>
		<div class="col-span-3 lg:col-span-10 py-6 sm:px-6 lg:px-8">
		
		<div class="flex justify-end pb-6">
        <router-link to="/admin/posts/add" class="btn bg-pink-400 text-white">Créer une annonce</router-link>   
    </div>
    <div v-if="data.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<Post :action="true"></Post>
			<Post :action="false"></Post>
	</div>
	<div v-else>
		<Nothing></Nothing>
	</div>
		</div>
	</AdminLayout>		
</template>

<script type="text/javascript">
import AdminLayout from "../AdminLayout.vue";
import Post from "../../components/Post.vue";
import Nothing from "../../components/Nothing.vue";

	export default {
		name: "PostIndex",
		components: {
			AdminLayout,
			Post,
			Nothing
		},
		data(){
			let data = [];

			return {data};
		}
	}
</script>