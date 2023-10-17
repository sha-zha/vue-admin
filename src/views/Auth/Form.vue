<template>
	<form class="space-y-6" action="#" method="POST">
      <div>
        <label :for="'email-'+msg" class="block text-sm text-center text-gray-900 font-medium leading-6">Email</label>
        <div class="mt-2">
          <input  :id="'email-'+msg" :name="'email-'+msg" type="email" autocomplete="email" placeholder="Saisir un email" required class="block w-full border border-gray-900 rounded-md p-1.5 text-gray-900 shadow-sm placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" v-model="email">
        </div>
      </div>
      <div>
        <label :for="'emailConfirm-'+msg" class="block text-sm text-center text-gray-900 font-medium leading-6">Email de confirmation</label>
        <div class="mt-2">
          <input :id="'emailConfirm-'+msg" :name="'emailConfirm-'+msg" type="email" autocomplete="emailConfirm" placeholder="Confirmer votre email" required class="block w-full border border-gray-900 rounded-md p-1.5 text-gray-900 shadow-sm placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" v-model="emailConfirm">
        </div>
      </div>

      <div>
        
          <label :for="'password-'+msg" class="block text-sm text-center text-gray-900 font-medium leading-6">Mot de passe</label>
        <div class="mt-2">
          <input :id="'password-'+msg" :name="'password-'+msg" type="password" autocomplete="current-password" placeholder="Saisir votre mot de passe" required class="block w-full border border-gray-900  rounded-md  p-1.5 text-gray-900 shadow-sm placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" v-model="password">
        </div>
      </div>

      <div class="flex flex-col items-center">
        <button type="submit" class="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400">M'inscrire</button>
      </div>
    </form>
</template>

<script type="text/javascript">
export default {
name: "FormSign",
props: {
msg: String
}
}
</script>