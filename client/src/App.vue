<template>
  <div id="app">
    <router-view />

  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  //CCA import ServiceWorkerUpdatePopup from '@/pwa/components/ServiceWorkerUpdatePopup.vue'

  @Component({
    name: 'App',
    components: {
      //CCA ServiceWorkerUpdatePopup
    }
  })
  export default class extends Vue {}
</script>
