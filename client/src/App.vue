<template>
    <div id="app">
          <router-view />
    </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  //TODO CCA import ServiceWorkerUpdatePopup from '@/pwa/componentsOld/ServiceWorkerUpdatePopup.vue'

  @Component({
    name: 'App',
    components: {
      //CCA ServiceWorkerUpdatePopup
    }
  })
  export default class extends Vue {}
</script>
