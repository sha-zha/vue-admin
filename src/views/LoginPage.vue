<template>
  <div class="flex min-h-screen justify-center px-2 md:px-6 py-12 lg:px-8">
  <div class="flex justify-center items-center flex-col bg-white max-w-sm w-full py-6 rounded-lg">  
  <div class="flex flex-col items-center">
    <img class="mx-auto h-24 w-24" src="../assets/logo.png" alt="logo animal airline">
    <h2 class="text-orange-500 font-medium">Animal Airline</h2>
    <p class="text-[#FF4500]">En route pour aider nos amis à quatres pattes</p>
  </div>

  <div class="mt-10 w-full px-3">
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="email" class="block text-sm text-center text-gray-900 font-medium leading-6">Email</label>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" placeholder="Saisir un email" required class="block w-full border border-gray-900  p-1.5 text-gray-900 shadow-sm placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <div>
        
          <label for="password" class="block text-sm text-center text-gray-900 font-medium leading-6">Mot de passe</label>
       
        <div class="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" placeholder="Saisir votre mot de passe" required class="block w-full border border-gray-900  p-1.5 text-gray-900 shadow-sm placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <div class="flex flex-col items-center">
        <button type="submit" class="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400">Se connecter</button>
        <a href="#" class="text-gray-900 font-medium mt-2">M'inscrire à animal airline</a>
      </div>
    </form>

  </div>
  </div>
</div>
</template>

<script type="text/javascript">
  export default {
    name:"LoginPage",
  }
</script>