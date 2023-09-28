<template>
  <nav class="bg-orange-400">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
            
              <router-link to="/admin/users" class="text-white rounded-md px-3 py-2 text-sm font-medium">Dashboard</router-link>
              <router-link to="/admin/users" class="text-white hover:bg-orange-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium">utilisateurs</router-link>
              <router-link to="/admin/checkpoints" class="text-white hover:bg-orange-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium">checkpoints</router-link>
              <a href="#" class="text-white hover:bg-orange-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Profile</a>
              <a href="#" class="text-white hover:bg-orange-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium">se déconnecter</a>
            </div>
          </div>
        </div>
        </div>
    </div>
  </nav>

  <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
    </div>
  </header>
  
</template>

<script>
	export default {
		name: "AdminLayout"
	}
</script>