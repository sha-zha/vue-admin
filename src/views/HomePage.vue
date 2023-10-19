<template>
	<div class="flex min-h-screen justify-center px-2 md:px-6 py-12 lg:px-8">
  <div class="flex justify-center items-center flex-col bg-white max-w-sm w-full py-6 rounded-lg">  
  <div class="flex flex-col items-center space-y-3">
    <img class="mx-auto h-24 w-24" src="../assets/logo.png" alt="logo animal airline">
    <h2 class="text-orange-500 font-medium">Animal Airline</h2>
    <p class="text-[#FF4500]">En route pour aider nos amis à quatres pattes</p>
    <p class="text-center">Ceci est une démo sans compte pour découvrir la vision des <strong>associations</strong> plus clicquer sur Association découvrez plus. Pour découvrir la vision des <strong>particuliers</strong> cliquer sur aider les animaux</p>
    
    <router-link to="/admin/posts" class="btn btn-orange">Association découvrez plus
  </router-link>
   <router-link to="/landing" class="btn btn-pink">Aider les animaux
  </router-link>
  </div>
</div>
</div>
</template>

<script>
export default {
	name: "HomePage"
}
</script>	
