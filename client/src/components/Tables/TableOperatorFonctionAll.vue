<template>
    <div class="TableAdminFonction-container">
        <div class="wrapper">
            <div class="header">
                <h3>{{ $t('tables.fonction.title') }}</h3>
            </div>
            <div class="filter">
                <el-input v-model="listQuery.name" :placeholder="$t('tables.fonction.champs.champs4')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>
                <el-select v-model="listQuery.idArea" :placeholder="$t('tables.fonction.champs.champs16')" clearable class="filter-item" style="width: 200px">
                    <el-option v-for="item in TypeOptionsAreas" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-select v-model="listQuery.idType" :placeholder="$t('tables.fonction.champs.champs4')" clearable class="filter-item" style="width: 200px">
                    <el-option v-for="item in TypeOptionsMeasureTypes" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('tables.generique.button.button1') }}</el-button>
            </div>
            <div class="table">
                <el-table ref="draggableTable" row-key="position" :key="tableKey" stripe v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%;" @sort-change="sortChange">
                    <el-table-column :label="$t('tables.fonction.champs.champs3')" min-width="450px">
                        <template slot-scope="{row}">
                            <span >{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.fonction.champs.champs4')" min-width="140px">
                        <template slot-scope="{row}">
                            <span >{{ row.measureType.name }}</span>
                        </template>
                    </el-table-column>

                    <!-- Areas -->
                    <el-table-column :label="$t('tables.fonction.champs.champs5')" min-width="140px">
                        <template slot-scope="{row}">
                            <span >{{ row.tankAreaDefEmptying.name1 }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.fonction.champs.champs6')" min-width="140px">
                        <template slot-scope="{row}">
                            <span >{{ row.tankAreaDefFilling.name1 }}</span>
                        </template>
                    </el-table-column>

                </el-table>
            </div>
            <div class="pagination">
                <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'
    import { cloneDeep } from 'lodash'

    import { getDBFonctions, updateDBFonctions, updateDBFonction, deleteDBFonction, defaultFonctionData, defaultFonctionRules, defaultFonctionQuery, defaultFonctionExcelHeater} from '@/api/fonctions'
    import { getDBFactorys} from '@/api/factorys'
    import { getDBAreas} from '@/api/areas'
    import { getDBPlcs} from '@/api/plcs'
    import { getDBEquips} from '@/api/equips'
    import { getDBMeasureTypes} from "@/api/measureTypes";
    import { getDBTankAreaDefEmptyings} from "@/api/tankAreaDefEmptyings";
    import { getDBTankAreaDefFillings} from "@/api/tankAreaDefFillings";

    import { IDataBaseFonctionData } from '@/api/types'

    import Pagination from '@/components/Pagination/index.vue'
    import UpdateFromNode from '@/components/TableComponents/Components/UpdateFromNode.vue'
    import ExportToExcel from '@/components/TableComponents/Components/ExportToExcel.vue'
    import ImportFromExcel from '@/components/UploadExcel/index.vue'
    import FormEditFonction from "@/components/TableComponents/FormEdit/FormEditFonction.vue";
    const Type1Options = [
        { key: true, displayName: 'True' },
        { key: false, displayName: 'False' }
    ]
    const textMap = {
        update: 'Edit',
        create: 'Create'
    }

    @Component({
        name: 'TableAdminFonction',
        components: {
            UpdateFromNode,
            ExportToExcel,
            ImportFromExcel,
            FormEditFonction,
            Pagination,
        },
        filters: {
        }
    })
    export default class Dashboard extends Vue {
        @Prop({ default: 'Visitor' }) private idFactory!: string
        private tableKey = 0

        private list: IDataBaseFonctionData[] = []
        private total = 0

        private listLoading = true
        private listQuery = defaultFonctionQuery
        private listExcel = defaultFonctionExcelHeater

        private Type1Options = Type1Options
        private TypeOptionsMeasureTypes = []
        private TypeOptionsFactorys = []
        private TypeOptionsAreas = []
        private TypeOptionsPlcs = []
        private TypeOptionsEquips = []
        private TypeOptionsTankAreaDefEmptyings = []
        private TypeOptionsTankAreaDefFillings = []

        private dialogFormVisible = false
        private dialogStatus = ''
        private textMap = textMap

        private rules = defaultFonctionRules
        private tempData = defaultFonctionData

        async created() {
            let data: any
            data = await getDBMeasureTypes( { page: 1, limit: 10000, name: undefined } )
            this.TypeOptionsMeasureTypes = data.data.rows

            data = await getDBFactorys( { page: 1, limit: 10000, name: undefined } )
            this.TypeOptionsFactorys = data.data.rows

            data = await getDBAreas( { page: 1, limit: 10000, name: undefined } )
            this.TypeOptionsAreas = data.data.rows

            data = await getDBPlcs( { page: 1, limit: 10000, name: undefined } )
            this.TypeOptionsPlcs = data.data.rows

            data = await getDBEquips( { page: 1, limit: 10000, name: undefined } )
            this.TypeOptionsEquips = data.data.rows

            data = await getDBTankAreaDefEmptyings( { page: 1, limit: 10000, name: undefined } )
            this.TypeOptionsTankAreaDefEmptyings = data.data.rows

            data = await getDBTankAreaDefFillings( { page: 1, limit: 10000, name: undefined } )
            this.TypeOptionsTankAreaDefFillings = data.data.rows

            this.getList()
        }
        private async getList() {
            this.listLoading = true
            const { data } = await getDBFonctions(this.listQuery)
            this.list = data.rows
            this.total = data.count
            this.listLoading = false
        }

        //Filter
        private handleFilter() {
            this.listQuery.page = 1
            this.getList()
        }
        private sortChange(data: any) {
            const { prop, order } = data
        }

    }
</script>

<style lang="scss">

</style>

<style lang="scss" scoped>
    .wrapper{
        height: 100%;
        display:grid;
        grid-gap: 3px;
        grid-template-columns:repeat(12, 1fr);
        grid-template-areas:
                "h h h h h h h h h h h h"
                ". f f f f f . e e e e ."
                ". t t t t t t t t t t ."
                ". p p p p p p p p p p ."
    }
    .header {
        //grid-column: span 12;
        grid-area:h;
        background:#eee;
        padding:1em;
        border:#333 1px solid;
    }
    .filter {
        //grid-column: span 8;
        grid-area: f;
        background:#eee;
        padding:1em;
        border:#333 1px solid;
    }
    .table {
        //grid-column: span 8;
        grid-area: t;
        background:#eee;
        padding:1em;
        border:#333 1px solid;
    }
    .pagination {
        //grid-column: span 12;
        grid-area: p;
        background:#eee;
        padding:1em;
        border:#333 1px solid;
    }

    .draggable-handler {
        cursor: pointer;
    }
    .show-d {
        margin-top: 15px;
    }
</style>

