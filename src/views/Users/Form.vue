<template>
	<form method="POST">
		<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pb-6">
        <div class="sm:col-span-3">
          <label for="firstname" class="block text-sm font-medium leading-6 text-gray-900">Prénom</label>
          <div class="mt-2">
            <input type="text" name="firstname" id="firstname" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="lastname" class="block text-sm font-medium leading-6 text-gray-900">Nom</label>
          <div class="mt-2">
            <input type="text" name="lastname" id="lastname" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
         <div class="sm:col-span-3">
          <label for="emailConfirm" class="block text-sm font-medium leading-6 text-gray-900">Email de confirmation</label>
          <div class="mt-2">
            <input id="emailConfirm" name="emailConfirm" type="email" autocomplete="emailConfirm" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
    </div>

    <div class="flex justify-center w-full">
    <button type="submit" v-if="action === 'add'" class="btn btn-blue">Ajouter</button>
	<button type="submit" v-else class="btn btn-blue">Modifier</button>
    </div>
		
	</form>
</template>

<script type="text/javascript">
	export default {
		name:"UserForm",
		props:{
			action: String,
		}
	}
</script>	