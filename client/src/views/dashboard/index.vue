<template>
        <div class="dashboard-container">
            <h2>{{ $t('screen.dashboardAdmin') }}</h2>
        </div>
</template>
      <script lang="ts">
          import { Component, Vue } from 'vue-property-decorator'

          @Component({
              name: 'Dashboard',
              components: {
              }
          })
          export default class Dashboard extends Vue {

          }
      </script>

