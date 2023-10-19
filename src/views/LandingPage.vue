<template>
	<UserLayout>
		<section>
			<h2 class="text-orange-500 tex-md md:text-3xl lg:text-5xl text-center py-4">Ils ont besoins de vous</h2>
			<div class="grid grid-cols-4 gap-4 px-4">
				<Post :action="false"></Post>
				<Post :action="false"></Post>
				<Post :action="false"></Post>
				<Post :action="false"></Post>
			</div>
		</section>
	</UserLayout>
</template>

<script>
import UserLayout from './UserLayout.vue';
import Post from '../components/Post.vue';

export default{
	name: "LandingPage",
	components: {
		UserLayout,
		Post
	}
}
</script>