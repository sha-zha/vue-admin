<template>
	<form class="space-y-6" action="#" method="POST">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div class="mt-2">
        <label :for="'firstname-'+msg" class="block text-sm text-center text-gray-900 font-medium leading-6">Prénom</label>
          <input  :id="'firstname-'+msg" :name="'firstname-'+msg" type="email" autocomplete="email" placeholder="Saisir votre prénom" required class="block w-full border border-gray-900 rounded-md p-1.5 text-gray-900 shadow-sm placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
        
        <div class="mt-2">
        <label :for="'lastname-'+msg" class="block text-sm text-center text-gray-900 font-medium leading-6">Nom</label>
          <input  :id="'lastname-'+msg" :name="'lastname-'+msg" type="email" autocomplete="email" placeholder="Saisir votre nom" required class="block w-full border border-gray-900 rounded-md p-1.5 text-gray-900 shadow-sm placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div>
        <label :for="'email-'+msg" class="block text-sm text-center text-gray-900 font-medium leading-6">Email</label>
        <div class="mt-2">
          <input  :id="'email-'+msg" :name="'email-'+msg" type="email" autocomplete="email" placeholder="Saisir un email" required class="block w-full border border-gray-900 rounded-md p-1.5 text-gray-900 shadow-sm placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div>
        <label :for="'emailConfirm-'+msg" class="block text-sm text-center text-gray-900 font-medium leading-6">Email de confirmation</label>
        <div class="mt-2">
          <input :id="'emailConfirm-'+msg" :name="'emailConfirm-'+msg" type="email" autocomplete="emailConfirm" placeholder="Confirmer votre email" required class="block w-full border border-gray-900 rounded-md p-1.5 text-gray-900 shadow-sm placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <div>
        
          <label :for="'password-'+msg" class="block text-sm text-center text-gray-900 font-medium leading-6">Mot de passe</label>
        <div class="mt-2">
          <input :id="'password-'+msg" :name="'password-'+msg" type="password" autocomplete="current-password" placeholder="Saisir votre mot de passe" required class="block w-full border border-gray-900  rounded-md  p-1.5 text-gray-900 shadow-sm placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <div class="flex h-6 items-center">
        <div class="relative flex gap-x-3">
              <div class="flex h-6 items-center">
                <input @click="updatebtn()" :id="'rgpd-'+msg" name="'rgpd-'+msg" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
              </div>
              <div class="text-sm leading-6">
                <label :for="'rgpd-'+msg" class="font-medium text-gray-900">rgpd</label>
                <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
              </div>
            </div>
        </div>
        <div class="relative flex gap-x-3" v-if="msg === 'user'">
              <div class="flex h-6 items-center">
                <input @click="updatebtn()" :id="msg" name="msg" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
              </div>
              <div class="text-sm leading-6">
                <label :for="msg"  class="font-medium text-gray-900">Je suis bien un particulier</label>
              </div>
        </div>
        <div class="relative flex gap-x-3" v-else>
              <div class="flex h-6 items-center">
                <input @click="updatebtn()" :id="msg" name="msg" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
              </div>
              <div class="text-sm leading-6">
                <label :for="msg"  class="font-medium text-gray-900">Je suis bien une association</label>
              </div>
        </div>
      <div class="flex flex-col items-center">
        <button v-bind:disable="btnDisable" v-bind:class="{'opacity-50': btnDisable === true, 'opacity-100': btnDisable === false}" type="submit" class="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400">M'inscrire</button>
      </div>
    </form>
</template>

<script type="text/javascript">
export default {
name: "FormSign",
data(){
	let btnDisable = true;
		return {
			btnDisable
		}
},
props: {
msg: String
},
methods:{
	updatebtn(){

		let user = document.getElementById('user');
		let association = document.getElementById('association');

		if(user.checked || association.checked){
			this.btnDisable=false;
		}else{
			this.btnDisable=true;
		}
	}
}
}
</script>