<template>

  <div class="grid grid-cols-4 lg:grid-cols-12 ">
    <aside class="col-span-1 lg:col-span-2 flex flex-col min-h-screen bg-orange-400 max-w-[200px]">
      <div class="flex flex-col h-3/4">
      <router-link to="/admin/users" class="text-white rounded-md px-3 py-2 text-sm font-medium">Dashboard</router-link>
              <router-link to="/admin/posts" class="text-white hover:bg-orange-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Mes annonces</router-link>
              <router-link to="/admin/helps" class="text-white hover:bg-orange-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Mes offres d'aides</router-link>
      </div>
              <div class="flex flex-col justify-end h-1/4">
                <a href="#" class="text-white font-bold px-3 pb-2">Se déconnecter</a>
              </div>
    </aside>

    <slot/>
    
  </div>

</template>

<script>
	export default {
		name: "AdminLayout"
	}
</script>