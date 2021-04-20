<template>
        <div class="dashboard-container">

                        <TableAdminDataProject></TableAdminDataProject>
                        <TableAdminProject></TableAdminProject>
                        <TableAdminMeasure></TableAdminMeasure>
                        <TableAdminFunction></TableAdminFunction>
                        <TableAdminProduct></TableAdminProduct>
                        <TableAdminAnalog></TableAdminAnalog>
                        <TableAdminDigital></TableAdminDigital>
                        <TableAdminEquip></TableAdminEquip>
                        <TableAdminTank></TableAdminTank>
                        <TableAdminPlc></TableAdminPlc>
                        <TableAdminServer></TableAdminServer>
                        <TableAdminTankArea></TableAdminTankArea>
                        <TableAdminArea></TableAdminArea>
                        <TableAdminComputer></TableAdminComputer>
                        <TableAdminFactory></TableAdminFactory>
                        <TableAdminPassword></TableAdminPassword>

        </div>
</template>
      <script lang="ts">
          import { Component, Vue } from 'vue-property-decorator'

          import TableAdminDataProject from '@/components/Tables/TableAdminDataProject.vue'
          import TableAdminProject from '@/components/Tables/TableAdminProject.vue'
          import TableAdminMeasure from '@/components/Tables/TableAdminMeasure.vue'
          import TableAdminFunction from '@/components/Tables/TableAdminFonction.vue'
          import TableAdminProduct from '@/components/Tables/TableAdminProduct.vue'
          import TableAdminAnalog from '@/components/Tables/TableAdminAnalog.vue'
          import TableAdminDigital from '@/components/Tables/TableAdminDigital.vue'
          import TableAdminTank from '@/components/Tables/TableAdminTank.vue'
          import TableAdminEquip from '@/components/Tables/TableAdminEquip.vue'
          import TableAdminPlc from '@/components/Tables/TableAdminPlc.vue'
          import TableAdminServer from '@/components/Tables/TableAdminServer.vue'
          import TableAdminTankArea from '@/components/Tables/TableAdminTankArea.vue'
          import TableAdminArea from '@/components/Tables/TableAdminArea.vue'
          import TableAdminComputer from '@/components/Tables/TableAdminComputer.vue'
          import TableAdminFactory from '@/components/Tables/TableAdminFactory.vue'
          import TableAdminPassword from '@/components/Tables/TableAdminUser.vue'

          @Component({
              name: 'Dashboard',
              components: {
                  TableAdminDataProject,
                  TableAdminProject,
                  TableAdminMeasure,
                  TableAdminFunction,
                  TableAdminProduct,
                  TableAdminAnalog,
                  TableAdminDigital,
                  TableAdminTank,
                  TableAdminEquip,
                  TableAdminPlc,
                  TableAdminServer,
                  TableAdminTankArea,
                  TableAdminArea,
                  TableAdminComputer,
                  TableAdminFactory,
                  TableAdminPassword,
              }
          })
          export default class Dashboard extends Vue {

          }
      </script>

