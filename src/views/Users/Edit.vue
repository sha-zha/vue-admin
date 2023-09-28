<template>
	<AdminLayout/>	
	<UserFrom action="edit"/>	
</template>

<script type="text/javascript">
import AdminLayout from "../AdminLayout.vue";
import UserFrom from './Form.vue';

	export default {
		name: "UserEdit",
		components:{
			AdminLayout,
			UserFrom 
		},
	}
</script>