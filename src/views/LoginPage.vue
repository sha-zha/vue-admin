<template>
  <div class="bg-log flex min-h-screen justify-center px-2 md:px-6 py-12 lg:px-8 bg-orange-200">
  <div class="flex justify-center items-center flex-col bg-white max-w-sm w-full py-6 rounded-lg">  
  <div>
    <img class="mx-auto h-24 w-24" src="../assets/logo-animal.png" alt="logo animal airline">
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-orange-400">Se connecter</h2>
  </div>

  <div class="mt-10 w-full px-3">
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">mail</label>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <div>
        
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
       
        <div class="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400">Se connecter</button>
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