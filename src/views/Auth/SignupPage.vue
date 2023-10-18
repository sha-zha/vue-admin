<template>
  <div id="signup" class="flex min-h-screen justify-center px-2 md:px-6 py-12 lg:px-8">
  <div class="flex justify-center items-center flex-col max-w-sm w-full rounded-lg">  
  <div class="flex flex-col bg-white items-center">
    <img class="mx-auto h-24 w-24" src="../../assets/logo.png" alt="logo animal airline">
    <h2 class="text-orange-500 font-medium">Animal Airline</h2>
    <p class="text-[#FF4500]">En route pour aider nos amis à quatres pattes</p>
    <router-link to='/signin' class="text-gray-900 font-medium">J'ai déjà un compte</router-link>
  </div>

  <div class="flex flex-wrap w-full">
    <div class="w-full">
      <img class="mx-auto h-24 w-24" src="../../assets/login.png" alt="logo animal airline">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-pink-600 bg-white': openTab !== 1, 'text-white bg-pink-600': openTab === 1}">
            Particulier
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-pink-600 bg-white': openTab !== 2, 'text-white bg-pink-600': openTab === 2}">
            Association
          </a>
        </li>
      </ul>
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
               
            <SignForm  msg="user"></SignForm>    
            </div>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <SignForm  msg="association"></SignForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  </div>
</div>
</template>

<script type="text/javascript">

import SignForm from './Form.vue';

  export default {
    name:"SignupPage",
     data() {
    return {
      openTab: 1
    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  },
  components : {
    SignForm
  }
  }
</script>