<template>
        <div class="dashboard-container">
            <component :is="currentRole" />
        </div>
</template>
      <script lang="ts">
          import { Component, Vue } from 'vue-property-decorator'
          import { UserModule } from '@/store/modules/user'

          import DashboardAdmin from './admin/index.vue'
          import DashboardManager from './manager/index.vue'
          import DashboardOperator from './operator/index.vue'
          import DashboardNotLogged from './notLogged/index.vue'

          @Component({
              name: 'DashboardAll',
              components: {
                  DashboardAdmin,
                  DashboardManager,
                  DashboardOperator,
                  DashboardNotLogged,
              }
          })
          export default class extends Vue {
              private currentRole = 'dashboard-not-logged'

              get roles() {
                  return UserModule.roles
              }

              created() {
                  if (this.roles.includes('admin')) {
                      this.currentRole = 'dashboard-admin'
                  }
                  else if (this.roles.includes('manager')) {
                      this.currentRole = 'dashboard-manager'
                  }
                  else if (this.roles.includes('operator')) {
                      this.currentRole = 'dashboard-operator'
                  }
                  else {
                      this.currentRole = 'dashboard-not-logged'
                  }
              }
          }
      </script>

