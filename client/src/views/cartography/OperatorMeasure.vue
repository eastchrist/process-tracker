<template>
    <div class="table-container">
        <div class="wrapper">
            <div class="header">
                <div class="headerContainer">
                    <div class="logoClient">
                        <img :src="logoClient" />
                    </div>
                    <div class="textHeader">
                        <h4>{{ $t('views.operatorMeasure.label.LossPreventionMapping') }}</h4>
                        <p>{{ fonctionName }}</p>
                    </div>
                    <div class="logoProcess">
                        <img :src="logoContractor" >
                    </div>
                </div>
            </div>
            <div class="subHeader">
                <div class="subHeaderContainer">
                    <div class="frequency">
                        <h4>{{ $t('views.operatorMeasure.label.frequencyLost') }}</h4>
                        <p>{{ fonctionNbLosse }} {{ $t('views.operatorMeasure.texte.byYear') }}</p>
                    </div>
                    <div class="type">
                        <h4>{{ $t('views.operatorMeasure.label.typeMeasure') }}</h4>
                        <p>{{ fonctionMeasureTypeName }}</p>
                    </div>
                    <div class="nbControl">
                        <h4>{{ $t('views.operatorMeasure.label.nbControl') }}</h4>
                        <p>{{ $t('views.operatorMeasure.texte.every') }} {{ fonctionFreqCheck }} {{ $t('views.operatorMeasure.texte.week') }}</p>
                    </div>
                    <div class="maxLosse">
                        <h4>{{ $t('views.operatorMeasure.label.maxLosse') }}</h4>
                        <p>{{ fonctionMaxLosse }} {{ $t('views.operatorMeasure.texte.maxLosseUnit') }}</p>
                    </div>
                </div>
            </div>
            <div class="result">
                    <h4>{{ $t('views.operatorMeasure.label.result') }}</h4>
                    <TableOperatorPush v-if="fonctionIdType =='1' || fonctionIdType =='2'" className="TableOperatorPush" :rules=rules :MeasureData=MeasureData
                                       :ProductOptions=ProductOptions :AreaSourceOptions=AreaSourceOptions :AreaDestOptions=AreaDestOptions
                                       @EditFormCancel="EditFormCancel" @EditFormAdd="EditFormAdd" >
                    </TableOperatorPush >
                    <TableOperatorTankEmpying v-if="fonctionIdType =='3' || fonctionIdType =='4'" className="TableOperatorTankEmpying" :rules=rules :MeasureData=MeasureData
                                              :ProductOptions=ProductOptions :AreaSourceOptions=AreaSourceOptions :AreaDestOptions=AreaDestOptions
                                              @EditFormCancel="EditFormCancel" @EditFormAdd="EditFormAdd" >
                    </TableOperatorTankEmpying>
            </div>
            <div class="utile">
                    <h4>{{ $t('views.operatorMeasure.label.utilitaire') }}</h4>
                    <AideCalculation className="AideCalculation" ></AideCalculation>
            </div>
            <div class="method">
                    <h4>{{ $t('views.operatorMeasure.label.method') }}</h4>
                    <p v-for="item in methodTexte" :key="item">{{ item }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { getDBFactorys} from '@/api/factorys'
    import { getDBProducts} from '@/api/products'
    import { getDBFonctions, addDBFonctionMeasure, defaultFonctionQuery, defaultFonctionData} from '@/api/fonctions'
    import {IDataBaseFonctionData, IDataBaseFonctionMeasureData, IDataBaseMeasureData, IDataBaseTankAreaDefEmptyingData, IDataBaseTankAreaDefFillingData, IDataBaseProductData} from '@/api/types'
    import { defaultMeasureData, defaultMeasureRules, addDBMeasure} from "@/api/measures";
    import { defaultProductData } from "@/api/products";

    import { defaultTankAreaDefEmptyingData } from "@/api/tankAreaDefEmptyings";
    import { defaultTankAreaDefFillingData } from "@/api/tankAreaDefFillings";

    import TableOperatorPush from "@/components/Tables/Operator/TableOperatorPush.vue";
    import TableOperatorTankEmpying from "@/components/Tables/Operator/TableOperatorTankEmpying.vue";
    import AideCalculation from "@/components/TableComponents/Components/AideCalculation.vue";

    @Component({
        components: {
            TableOperatorPush,
            TableOperatorTankEmpying,
            AideCalculation

        },
    })
    export default class extends Vue {
        //private options: RouteConfig[] = []
        //private tableKey = 0
        private fonctionList: IDataBaseFonctionData = defaultFonctionData
        private total = 0

        private listLoading = true
        private listQuery = defaultFonctionQuery
        private MeasureData: IDataBaseMeasureData = defaultMeasureData
        private ProductOptions: IDataBaseProductData[] = [] //Product selection
        private AreaSourceOptions: IDataBaseTankAreaDefEmptyingData | null | string  = defaultTankAreaDefEmptyingData //Tank Source selection
        private AreaDestOptions: IDataBaseTankAreaDefFillingData | null | string = defaultTankAreaDefFillingData //Tank Destination selection

        private rules = defaultMeasureRules

        private idFactory = ''
        private idFonction = ''
        private logoClient = ''
        private logoContractor = ''

        private fonctionName = ''
        private fonctionIdType = -1
        private fonctionNbLosse = ''
        private fonctionMeasureTypeName = ''
        private fonctionFreqCheck = ''
        private fonctionMaxLosse = ''



        private methodTexte: string[] = []

        async created() {
            this.idFactory = this.$route.params.idFactory
            this.idFonction = this.$route.params.idFonction

            let data: any
            data = await getDBFactorys( { page: 1, limit: 10000, id: this.idFactory } )

            this.logoClient = require('@/assets/logoEntreprise/' + data.data.rows[0].logoClient)
            this.logoContractor = require('@/assets/logoEntreprise/' + data.data.rows[0].logoContractor)

            data = await getDBProducts( { page: 1, limit: 10000, idFactory: this.idFactory } )
            this.ProductOptions = data.data.rows
            this.getList()
        }

        private getMethodList(methodList: string) {
            if ( methodList === "") {
                return []
            } else {
                const array = methodList.split(";")
                for (let index = 0; index < array.length; ++index) {
                    array[index] = 'views.operatorMeasure.method.' + array[index]
                    array[index] = this.$t(array[index]).toString()
                }
                return array
            }
        }
        private async getList() {
            this.listLoading = true
            const { data } = await getDBFonctions( { page: 1, limit: 10000, idFactory: this.idFactory, idFonction: this.idFonction })
            this.fonctionList = data.rows[0]
            this.total = data.count
            this.methodTexte = this.getMethodList( this.fonctionList.method )

            const fonction = this.fonctionList
            // There is no options inside node tankAreaDefEmptying
            if (( fonction.tankAreaDefEmptying!.name === '') && ( this.fonctionList.tankAreaDefEmptying!.name1 === '')) {
                this.AreaSourceOptions = ''
            } else {
                this.AreaSourceOptions = this.fonctionList.tankAreaDefEmptying!.options
            }

            // There is no options inside node tankAreaDefFilling
            if (( this.fonctionList.tankAreaDefFilling!.name === '') && ( this.fonctionList.tankAreaDefFilling!.name1 === '')) {
                this.AreaDestOptions = ''
            } else {
                this.AreaDestOptions = this.fonctionList.tankAreaDefFilling!.options
            }


            this.fonctionName = this.fonctionList.name
            this.fonctionIdType  = this.fonctionList.idType
            this.fonctionNbLosse = this.fonctionList.nbLosse.toString()
            this.fonctionMeasureTypeName = this.fonctionList.measureType!.name
            this.fonctionFreqCheck = this.fonctionList.freqCheck.toString()
            this.fonctionMaxLosse = this.fonctionList.maxLosse.toString()

            this.MeasureData = { id: 0, position: 0, comment: "", idType: this.fonctionList.idType, idTankSource: "", idTankDest: "",
                losses: "", ts: "", measure1: "", ts1: "", measure2: "", ts2: "", measure3: "", ts3: "",
                idProduct: "", idFonction: this.fonctionList.id
            }
            this.listLoading = false
        }

        //Coming from FormEdit
        private EditFormCancel() {
            this.MeasureData = { id: 0, position: 0, comment: "", idType: this.fonctionList.idType,idTankSource: "", idTankDest: "",
                losses: "", ts: "", measure1: "", ts1: "", measure2: "", ts2: "", measure3: "", ts3: "",
                idProduct: "", idFonction: ""
            }
        }

        private getProductById( products: IDataBaseProductData[], idProduct: number) {
            const productDef = defaultProductData
            for (const product of products) {
                if (product.id === idProduct) {
                    return product
                }
            }
            return productDef
        }

        // A new measurement have been done
        private async EditFormAdd( datas: any ) {
            const updateDBMeasureData: IDataBaseMeasureData = {
                id: 1, position: 999999, comment: datas.comment, idType: this.fonctionList.idType, idTankSource: datas.idTankSource, idTankDest: datas.idTankDest,
                losses: datas.losses, ts: datas.ts, measure1: datas.measure1, ts1: datas.ts1, measure2: datas.measure2, ts2: datas.ts2, measure3: datas.measure3, ts3: datas.ts3,
                idProduct: datas.idProduct, idFonction: this.fonctionList.id
            }
            const product = this.getProductById(this.ProductOptions, datas.idProduct)
            let alarmLosses = false
            if ( datas.losses >= this.fonctionList.maxLosse ) { alarmLosses = true }
            const updateDBFonctionData: IDataBaseFonctionMeasureData = {
                lastCheckDate: new Date(),
                haveBeenCheck: true,
                haveToBeValidated: true,
                alarmLosses: alarmLosses,
                idEquip: this.fonctionList.idEquip,
                idEquipIndex: this.fonctionList.idEquipIndex,
                Losses: datas.losses,
                LossesPrice: datas.losses * product.price,
                LossesAnnualLosses: datas.losses * this.fonctionList.nbLosse,
                LossesAnnualPrice: datas.losses * this.fonctionList.nbLosse * product.price,
            }
            let data = await addDBMeasure(updateDBMeasureData)
            data = await addDBFonctionMeasure(updateDBFonctionData)
            this.$notify({
                title: this.$t('notify.notify3.title') + "",
                message: this.$t('notify.notify3.message') + "",
                type: 'success',
                duration: 2000
            })
            this.MeasureData = { id: 0, position: 0, comment: "", idType: this.fonctionList.idType, idTankSource: "", idTankDest: "",
                losses: "", ts: "", measure1: "", ts1: "", measure2: "", ts2: "", measure3: "", ts3: "",
                idProduct: "", idFonction: ""
            }
        }
    }
</script>

<style lang="scss" scoped>
    .table-container {
        background: $adminContainerBgColor;
        padding:2px;
        margin-bottom: 20px;
    }
    .wrapper{
        height: 100%;
        display:grid;
        grid-gap: 3px;
        grid-template-columns:repeat(12, minmax(100px, 1fr));
        //grid-template-rows: 0.2fr 0.2fr 1.5fr 0.2fr;
        grid-template-areas:
                "header    header    header    header    header    header    header    header    header    header    header    header   "
                "subHeader subHeader subHeader subHeader subHeader subHeader subHeader subHeader subHeader subHeader subHeader subHeader"
                "method    method    method    method    method    method    method    method    method    method    method    method  "
                "result    result    result    result    result    result    utile     utile     utile     utile     utile     utile  "
                "picture   picture   picture   picture   picture   picture   picture   picture   picture   picture   picture   picture  ";
    }
    .header {
        //grid-column: span 12;
        grid-area: header;
        background:#eee;
        padding:1em;
        border:#333 1px solid;
    }
    .headerContainer{
        display:grid;
        grid-template-columns: 1fr 4fr 1fr;
        grid-auto-rows: 150px;
        grid-gap:1em;
    }
    .headerContainer > div{
        border:#333 1px solid;
        padding:1em;
    }

    .subHeader {
        grid-area: subHeader;
        background:#eee;
        padding:1em;
        border:#333 1px solid;
    }
    .subHeaderContainer{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-auto-rows: 90px;
        grid-gap:1em;
    }
    .subHeaderContainer > div{
        border:#333 1px solid;
        padding:1em;
    }

    .pictures {
        grid-area: picture;
        background:#eee;
        padding:1em;
        border:#333 1px solid;
    }
    .picturesContainer{
        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 90px;
        grid-gap:1em;
    }
    .picturesContainer > div{
        border:#333 1px solid;
        padding:1em;
    }

    .result {
        grid-area: result;
        background:#eee;
        padding:1em;
        border:#333 1px solid;
    }
    .utile {
        grid-area: utile;
        background:#eee;
        padding:1em;
        border:#333 1px solid;
    }
    .method {
        grid-area: method;
        background:#eee;
        padding:1em;
        border:#333 1px solid;
    }
    //.contentContainer{
    //    display:grid;
    //    grid-template-columns: 1fr 1fr 1fr;
    //    grid-auto-rows: 900px;
    //    grid-gap:1em;
    //}
    //.contentContainer > div{
    //    border:#333 1px solid;
    //    padding:1em;
    //}

    @media only screen and (max-width: 768px) {
        .table-container {
            background: $adminContainerBgColor;
            padding:2px;
            margin-bottom: 20px;
        }
        .wrapper{
            display:grid;
            height: 100vh;
            grid-gap: 0.2rem;
            grid-template-columns:1fr 1fr 1fr;
            //grid-template-rows: 0.2fr 0.2fr 0.2fr 1.5fr 0.2fr;
            grid-template-areas:
                    "header header header "
                    "filter filter filter "
                    "extra  extra  extra  "
                    "treev  treev  treev  "
                    "table  table  table  "
                    "pages  pages  pages  ";
        }
    }

</style>

