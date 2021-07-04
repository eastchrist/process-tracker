<template>
    <el-button :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">{{ $t('tables.generique.button.button10') }}</el-button>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'
    import { exportJson2Excel } from '@/utils/excel'
    import { formatJson } from '@/utils'
    import { getDBAnalogs, defaultAnalogExcelHeater} from '@/api/analogs'
    import { getDBAreas, defaultAreaExcelHeater} from '@/api/areas'
    import { getDBComputers, defaultComputerExcelHeater} from '@/api/computers'
    import { getDBProjectActions, defaultProjectActionExcelHeater} from '@/api/projectActions'
    import { getDBDigitals, defaultDigitalExcelHeater} from '@/api/digitals'
    import { getDBEquips, defaultEquipExcelHeater} from '@/api/equips'
    import { getDBFactorys, defaultFactoryExcelHeater} from '@/api/factorys'
    import { getDBFonctions, defaultFonctionExcelHeater} from '@/api/fonctions'
    import { getDBMeasures, defaultMeasureExcelHeater} from '@/api/measures'
    import { getDBMeasureTypes, defaultMeasureTypeExcelHeater} from '@/api/measureTypes'

    import { getDBPlcs, defaultPlcExcelHeater} from '@/api/plcs'
    import { getDBProducts, defaultProductExcelHeater} from '@/api/products'
    import { getDBProjects, defaultProjectExcelHeater} from '@/api/projects'
    import { getDBProjectTypes, defaultProjectTypeExcelHeater} from '@/api/projectTypes'
    import { getDBProjectStatus, defaultProjectStatusExcelHeater} from '@/api/projectStatus'
    import { getDBServers, defaultServerExcelHeater} from '@/api/servers'
    import { getDBTankAreaDefEmptyings, defaultTankAreaDefEmptyingExcelHeater} from '@/api/tankAreaDefEmptyings'
    import { getDBTankAreaDefFillings, defaultTankAreaDefFillingExcelHeater} from '@/api/tankAreaDefFillings'
    import { getDBTankAreas, defaultTankAreaExcelHeater} from '@/api/tankAreas'
    import { getDBTanks, defaultTankExcelHeater} from '@/api/tanks'
    import { getDBUsers, defaultUserExcelHeater} from '@/api/users'



    @Component({
        name: 'ExportToExcel',
        components: {
        }
    })
    export default class extends Vue {
        @Prop({ default: '' }) private className!: string
        @Prop({ default: 'Factory' }) private TableName!: string
        //@Prop({ default: '' }) private TableList!: string
        //@Prop({ default: defaultEmptyExcelHeater }) private defaultExcelHeater!: []

        private downloadLoading = false

        private async handleDownload() {
            this.downloadLoading = true
            const TableName = this.$props.TableName
            let list = []
            let defaultExcelHeater: any = []
            if (TableName === 'Analog') {
                const { data } = await getDBAnalogs( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeater = defaultAnalogExcelHeater
                list = data.rows
            }
            else if (TableName === 'Area') {
                const { data } = await getDBAreas( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeater = defaultAreaExcelHeater
                list = data.rows
            }
            else if (TableName === 'Computer') {
                const { data } = await getDBComputers( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeater = defaultComputerExcelHeater
                list = data.rows
            }
            else if (TableName === 'ProjectAction') {
                const { data } = await getDBProjectActions( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeater = defaultProjectActionExcelHeater
                list = data.rows
            }
            else if (TableName === 'Digital') {
                const { data } = await getDBDigitals( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeater = defaultDigitalExcelHeater
                list = data.rows
            }
            else if (TableName === 'Equip') {
                const { data } = await getDBEquips( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeater = defaultEquipExcelHeater
                list = data.rows
            }
            else if (TableName === 'Factory') {
                const { data } = await getDBFactorys( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeater = defaultEquipExcelHeater
                list = data.rows
            }
            else if (TableName === 'Fonction') {
                const { data } = await getDBFonctions( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeater = defaultFonctionExcelHeater
                list = data.rows
            }
            else if (TableName === 'Measure') {
                const { data } = await getDBMeasures( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeater = defaultMeasureExcelHeater
                list = data.rows
            }
            else if (TableName === 'MeasureType') {
                const { data } = await getDBMeasureTypes( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeater = defaultMeasureTypeExcelHeater
                list = data.rows
            }
            else if (TableName === 'Plc') {
                const { data } = await getDBPlcs( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeater = defaultPlcExcelHeater
                list = data.rows
            }
            else if (TableName === 'Product') {
                const { data } = await getDBProducts( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeater = defaultProductExcelHeater
                list = data.rows
            }
            else if (TableName === 'Project') {
                const { data } = await getDBProjects( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeater = defaultProjectExcelHeater
                list = data.rows
            }
            else if (TableName === 'ProjectType') {
                const { data } = await getDBProjectTypes( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeater = defaultProjectTypeExcelHeater
                list = data.rows
            }
            else if (TableName === 'ProjectStatus') {
                const { data } = await getDBProjectStatus( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeater = defaultProjectStatusExcelHeater
                list = data.rows
            }
            else if (TableName === 'Server') {
                const { data } = await getDBServers( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeater = defaultServerExcelHeater
                list = data.rows
            }
            else if (TableName === 'TankAreaDefEmptying') {
                const { data } = await getDBTankAreaDefEmptyings( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeater = defaultTankAreaDefEmptyingExcelHeater
                list = data.rows
            }
            else if (TableName === 'TankAreaDefFilling') {
                const { data } = await getDBTankAreaDefFillings( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeater = defaultTankAreaDefFillingExcelHeater
                list = data.rows
            }
            else if (TableName === 'TankArea') {
                const { data } = await getDBTankAreas( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeater = defaultTankAreaExcelHeater
                list = data.rows
            }
            else if (TableName === 'Tank') {
                const { data } = await getDBTanks( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeater = defaultTankExcelHeater
                list = data.rows
            }
            else if (TableName === 'Password') {
                const { data } = await getDBUsers( { page: 1, limit: 10000, name: undefined } )
                defaultExcelHeater = defaultUserExcelHeater
                list = data.rows
            }

            const data = formatJson(defaultExcelHeater, list)
            exportJson2Excel(defaultExcelHeater, data, TableName)
            this.downloadLoading = false
        }
    }

</script>
