<template>
  <AdminLayout>
    <div class="col-span-3 lg:col-span-10 py-6 sm:px-6 lg:px-8">
      <div v-if="data.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Help></Help>
      </div> 
      <Nothing v-else></Nothing>
    </div>
  </AdminLayout>
 
</template>

<script>
import AdminLayout from '../AdminLayout.vue';
import Help from '../../components/Help.vue';
import Nothing from '../../components/Nothing.vue';

export default {
  name: "HelpIndex",
  components: {
    AdminLayout,
    Help,
    Nothing
  },
  data(){
    let data = [];
    return {data};
  }
}
</script>