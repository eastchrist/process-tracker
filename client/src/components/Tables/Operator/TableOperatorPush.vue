<template>
        <div :class="className">
                <el-form ref="measureForm" :rules="rules" :model="MeasureData" label-position="left" label-width="200px" >
                        <el-form-item :label="$t('views.operatorMeasure.label.productSelection')" prop="idProduct" >
                                <el-select v-model="MeasureData.idProduct" @change="onChangeProduct()" :placeholder="$t('views.operatorMeasure.placeholder.productSelection')" style="width:80%">
                                    <el-option v-for="item in ProductOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item :label="$t('views.operatorMeasure.label.productSelectedName')" style="width: 300px;">
                                <el-input v-model="selectProductName" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item :label="$t('views.operatorMeasure.label.productSelectedTotalSolid')" style="width: 300px;">
                                <el-input type="number" v-model="selectProductTs" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item :label="$t('views.operatorMeasure.label.productSelectedPrice')" style="width: 300px; ">
                                <el-input v-model="selectProductPrice" :disabled="true"></el-input>
                        </el-form-item>

                        <el-form-item v-if="showAreaSource === true" :label="$t('views.operatorMeasure.label.areaSource')" prop="idTankSource" >
                                <el-select v-model="MeasureData.idTankSource" :placeholder="$t('views.operatorMeasure.placeholder.tankSource')" style="width:80%">
                                        <el-option v-for="item in AreaSourceOptions" :key="item.idTank" :label="item.name1" :value="item.idTank"></el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item v-if="showAreaDest === true" :label="$t('views.operatorMeasure.label.areaDestination')"  prop="idTankDest">
                                <el-select v-model="MeasureData.idTankDest" :placeholder="$t('views.operatorMeasure.placeholder.tankDest')" style="width:80%">
                                        <el-option v-for="item in AreaDestOptions" :key="item.idTank" :label="item.name1" :value="item.idTank"></el-option>
                                </el-select>
                        </el-form-item>

                        <el-form-item :label="$t('views.operatorMeasure.label.tables.Measure.label')">
                                <table style="width:100%">
                                        <tr>
                                                <th>{{ $t('views.operatorMeasure.label.tables.Measure.champs1') }}</th>
                                                <th>{{ $t('views.operatorMeasure.label.tables.Measure.champs2') }}</th>
                                                <th>{{ $t('views.operatorMeasure.label.tables.Measure.champs3') }}</th>
                                        </tr>
                                        <tr>
                                                <td>1</td>
                                                <td>
                                                        <el-form-item prop="measure1">
                                                            <el-input v-model="MeasureData.measure1" @change="onChangeMeasurement()"></el-input>
                                                        </el-form-item>
                                                </td>
                                                <td>
                                                    <el-form-item prop="ts1">
                                                        <el-input v-model="MeasureData.ts1" @change="onChangeMeasurement()"></el-input>
                                                    </el-form-item>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>2</td>
                                                <td>
                                                        <el-form-item prop="measure2">
                                                            <el-input v-model="MeasureData.measure2" @change="onChangeMeasurement()"></el-input>
                                                        </el-form-item>
                                                </td>
                                                <td>
                                                        <el-form-item prop="ts2">
                                                            <el-input v-model="MeasureData.ts2" @change="onChangeMeasurement()"></el-input>
                                                        </el-form-item>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>3</td>
                                                <td>
                                                        <el-form-item prop="measure3">
                                                            <el-input v-model="MeasureData.measure3" @change="onChangeMeasurement()"></el-input>
                                                        </el-form-item>
                                                </td>
                                                <td>
                                                        <el-form-item prop="ts3">
                                                            <el-input v-model="MeasureData.ts3" @change="onChangeMeasurement()"></el-input>
                                                        </el-form-item>
                                                </td>
                                        </tr>
                                </table>
                        </el-form-item>
                        <el-form-item :label="$t('views.operatorMeasure.label.comment')" prop="comment">
                                <el-input type="textarea" :rows="2" :placeholder="$t('views.operatorMeasure.placeholder.comment')" v-model="MeasureData.comment">
                                </el-input>
                        </el-form-item>
                        <el-form-item :label="$t('views.operatorMeasure.label.calculLost')" prop="losses">
                                <el-input v-model="MeasureData.losses" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item>
                                <el-button type="primary" @click.native.prevent="handleMeasureCreation">{{ $t('views.operatorMeasure.button.creation') }}</el-button>
                                <el-button @click.native.prevent="handleMeasureCancel" >{{ $t('views.operatorMeasure.button.cancel') }}</el-button>
                        </el-form-item>
                </el-form>
        </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'
    import { Form as ElForm } from 'element-ui'

    @Component({
        name: 'TableOperatorPush.vue',
        components: {
        },
        filters: {
        }
    })
    export default class TableOperatorPushFinal extends Vue {
        @Prop({ default: '' }) private className!: string
        @Prop({ default: { } }) private rules!: any
        @Prop({ default: { } }) private MeasureData!: any

        @Prop({ default: { } }) private ProductOptions!: any
        @Prop({ default: { } }) private AreaSourceOptions!: any
        @Prop({ default: { } }) private AreaDestOptions!: any

        private selectProductTs = ""
        private selectProductName = ""
        private selectProductPrice = ""

        private showAreaSource = true
        private showAreaDest = true

        created() {
                if ( this.AreaSourceOptions === '') { this.showAreaSource  = false}
                if ( this.AreaDestOptions === '') { this.showAreaDest  = false}
        }

        private calculationLosse() {
            const retour = ""
            //if ((this.selectProductTs === "") || (this.MeasureData.measure1 === "") || (this.MeasureData.ts1 === "") || (this.MeasureData.measure2 === "") || (this.MeasureData.ts2 === "") || (this.MeasureData.measure3 === "") || (this.MeasureData.ts3 === "") ){
            const selectProductTs = parseFloat (this.selectProductTs)
            const measure1 = parseFloat (this.MeasureData.measure1)
            const ts1 = parseFloat (this.MeasureData.ts1)
            const measure2 = parseFloat (this.MeasureData.measure2)
            const ts2 = parseFloat (this.MeasureData.ts2)
            const measure3 = parseFloat (this.MeasureData.measure3)
            const ts3 = parseFloat (this.MeasureData.ts3)

            if ((isNaN(selectProductTs)) || (isNaN(measure1)) || (isNaN(ts1)) || (isNaN(measure2)) || (isNaN(ts2)) || (isNaN(measure3)) || (isNaN(ts3)) || (selectProductTs === 0)) { return "" }
            const quantity1 = (( measure2 - measure1 ) * (( ts1 + ts2 ) / 2)) / selectProductTs
            const quantity2 = (( measure3 - measure2 ) * (( ts2 + ts3 ) / 2)) / selectProductTs
            if (( quantity1 < 0 || quantity2 < 0)) { return "" }
            return Number((quantity1 + quantity2).toFixed(2))
        }
        private findSelectProductCaracterisque ( productPosition: string) {
            let productName = ""
            let productTS= ""
            let productPrice = ""
            for (const ProductOption of this.ProductOptions) {
                if (ProductOption.id === parseInt(productPosition)) {
                    productName = ProductOption.name
                    productTS = ProductOption.totalSolid.toString()
                    this.MeasureData.ts = productTS
                    productPrice = ProductOption.price.toString()
                    return { productName, productTS, productPrice }
                }
            }
            return { productName, productTS, productPrice }
        }
        onChangeProduct() {
            const product = this.findSelectProductCaracterisque( this.MeasureData.idProduct )
            this.selectProductName = product.productName
            this.selectProductTs = product.productTS
            this.MeasureData.ts = product.productTS
            this.selectProductPrice = product.productPrice
            this.MeasureData.losses = this.calculationLosse ()
        }
        onChangeMeasurement() {
            this.MeasureData.losses = this.calculationLosse ()
        }

        private handleMeasureCancel() {
            this.$emit('EditFormCancel', this.MeasureData)
        }
        private handleMeasureCreation() {
            (this.$refs.measureForm as ElForm).validate(async(valid: boolean) => {
                if (valid) {
                    this.$emit('EditFormAdd', this.MeasureData)
                }
            })
        }

    }
</script>

<style lang="scss" scoped>
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 50%;
    }
    td, th {
        border: 1px solid #dddddd;
        text-align: center;
        padding: 8px;
    }
</style>
