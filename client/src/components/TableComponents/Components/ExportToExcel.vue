<template>
    <el-button :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">{{ $t('tables.generique.button.button10') }}</el-button>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'
    import { exportJson2Excel } from '@/utils/excel'
    import { formatJson } from '@/utils'
    import { getDBAnalogs, defaultAnalogExcelHeader} from '@/api/analogs'
    import { getDBAreas, defaultAreaExcelHeader} from '@/api/areas'
    import { getDBComputers, defaultComputerExcelHeader} from '@/api/computers'
    import { getDBProjectActions, defaultProjectActionExcelHeader} from '@/api/projectActions'
    import { getDBDigitals, defaultDigitalExcelHeader} from '@/api/digitals'
    import { getDBEquips, defaultEquipExcelHeader} from '@/api/equips'
    import { getDBFactorys, defaultFactoryExcelHeader} from '@/api/factorys'
    import { getDBFonctions, defaultFonctionExcelHeader} from '@/api/fonctions'
    import { getDBMeasures, defaultMeasureExcelHeader} from '@/api/measures'
    import { getDBMeasureTypes, defaultMeasureTypeExcelHeader} from '@/api/measureTypes'

    import { getDBPlcs, defaultPlcExcelHeader} from '@/api/plcs'
    import { getDBProducts, defaultProductExcelHeader} from '@/api/products'
    import { getDBProjects, defaultProjectExcelHeader} from '@/api/projects'
    import { getDBProjectTypes, defaultProjectTypeExcelHeader} from '@/api/projectTypes'
    import { getDBProjectStatus, defaultProjectStatusExcelHeader} from '@/api/projectStatus'
    import { getDBServers, defaultServerExcelHeader} from '@/api/servers'
    import { getDBTankAreaDefEmptyings, defaultTankAreaDefEmptyingExcelHeader} from '@/api/tankAreaDefEmptyings'
    import { getDBTankAreaDefFillings, defaultTankAreaDefFillingExcelHeader} from '@/api/tankAreaDefFillings'
    import { getDBTankAreas, defaultTankAreaExcelHeader} from '@/api/tankAreas'
    import { getDBTanks, defaultTankExcelHeader} from '@/api/tanks'
    import { getDBUsers, defaultUserExcelHeader} from '@/api/users'

    @Component({
        name: 'ExportToExcel',
        components: {
        }
    })
    export default class extends Vue {
        @Prop({ default: '' }) private className!: string
        @Prop({ default: 'Factory' }) private TableName!: string

        private downloadLoading = false

        private async handleDownload() {
            this.downloadLoading = true
            const TableName = this.$props.TableName
            let list = []
            let defaultExcelHeader: any = []
            if (TableName === 'Analog') {
                const { data } = await getDBAnalogs( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeader = defaultAnalogExcelHeader
                list = data.rows
            }
            else if (TableName === 'Area') {
                const { data } = await getDBAreas( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeader = defaultAreaExcelHeader
                list = data.rows
            }
            else if (TableName === 'Computer') {
                const { data } = await getDBComputers( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeader = defaultComputerExcelHeader
                list = data.rows
            }
            else if (TableName === 'ProjectAction') {
                const { data } = await getDBProjectActions( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeader = defaultProjectActionExcelHeader
                list = data.rows
            }
            else if (TableName === 'Digital') {
                const { data } = await getDBDigitals( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeader = defaultDigitalExcelHeader
                list = data.rows
            }
            else if (TableName === 'Equip') {
                const { data } = await getDBEquips( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeader = defaultEquipExcelHeader
                list = data.rows
            }
            else if (TableName === 'Factory') {
                const { data } = await getDBFactorys( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeader = defaultFactoryExcelHeader
                list = data.rows
            }
            else if (TableName === 'Fonction') {
                const { data } = await getDBFonctions( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeader = defaultFonctionExcelHeader
                list = data.rows
            }
            else if (TableName === 'Measure') {
                const { data } = await getDBMeasures( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeader = defaultMeasureExcelHeader
                list = data.rows
            }
            else if (TableName === 'MeasureType') {
                const { data } = await getDBMeasureTypes( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeader = defaultMeasureTypeExcelHeader
                list = data.rows
            }
            else if (TableName === 'Plc') {
                const { data } = await getDBPlcs( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeader = defaultPlcExcelHeader
                list = data.rows
            }
            else if (TableName === 'Product') {
                const { data } = await getDBProducts( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeader = defaultProductExcelHeader
                list = data.rows
            }
            else if (TableName === 'Project') {
                const { data } = await getDBProjects( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeader = defaultProjectExcelHeader
                list = data.rows
            }
            else if (TableName === 'ProjectType') {
                const { data } = await getDBProjectTypes( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeader = defaultProjectTypeExcelHeader
                list = data.rows
            }
            else if (TableName === 'ProjectStatus') {
                const { data } = await getDBProjectStatus( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeader = defaultProjectStatusExcelHeader
                list = data.rows
            }
            else if (TableName === 'Server') {
                const { data } = await getDBServers( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeader = defaultServerExcelHeader
                list = data.rows
            }
            else if (TableName === 'TankAreaDefEmptying') {
                const { data } = await getDBTankAreaDefEmptyings( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeader = defaultTankAreaDefEmptyingExcelHeader
                list = data.rows
            }
            else if (TableName === 'TankAreaDefFilling') {
                const { data } = await getDBTankAreaDefFillings( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeader = defaultTankAreaDefFillingExcelHeader
                list = data.rows
            }
            else if (TableName === 'TankArea') {
                const { data } = await getDBTankAreas( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeader = defaultTankAreaExcelHeader
                list = data.rows
            }
            else if (TableName === 'Tank') {
                const { data } = await getDBTanks( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeader = defaultTankExcelHeader
                list = data.rows
            }
            else if (TableName === 'Password') {
                const { data } = await getDBUsers( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeader = defaultUserExcelHeader
                list = data.rows
            }

            const data = formatJson(defaultExcelHeader, list)
            exportJson2Excel(defaultExcelHeader, data, TableName)
            this.downloadLoading = false
        }
    }

</script>
