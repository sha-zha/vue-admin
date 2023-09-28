<template>
	<AdminLayout/>	
	<div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
	<UserFrom action="add"></UserFrom>
</div>
</template>

<script type="text/javascript">
import AdminLayout from "../AdminLayout.vue";
import UserFrom from './Form.vue';

	export default {
		name: "UserAdd",
		components:{
			AdminLayout,
			UserFrom 
		},
	}
</script>