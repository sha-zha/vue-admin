<template>
    <header class="relative">
      <nav class="flex h-10 items-center justify-center bg-orange-500 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
          <img class="h-10 w-auto" src="../assets/white-logo.png" alt="Logo animal airline">
        </div>
      </div>
    </nav>
    </header>
    <main>
      <slot></slot>
    </main>
</template>

<script>
	export default {
		name: "UserLayout"
	}
</script>