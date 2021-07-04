<template>
        <div :class="className">
                <el-form ref="measureForm" :rules="rules" :model="MeasureData" label-position="left" label-width="200px" >
                        <el-form-item :label="$t('views.operatorMeasure.label.productSelection')" prop="idProduct">
                                <el-select v-model="MeasureData.idProduct" @change="onChangeProduct()" :placeholder="$t('views.operatorMeasure.placeholder.productSelection')">
                                    <el-option v-for="item in ProductOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                                </el-select>
                        </el-form-item>

                        <el-form-item :label="$t('views.operatorMeasure.label.productSelectedName')" style="width: 300px; ">
                                <el-input v-model="selectProductName" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item :label="$t('views.operatorMeasure.label.productSelectedTotalSolid')" style="width: 300px; ">
                                <el-input type="number" v-model="selectProductTs" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item :label="$t('views.operatorMeasure.label.productSelectedPrice')" style="width: 300px; ">
                                <el-input v-model="selectProductPrice" :disabled="true"></el-input>
                        </el-form-item>

                        <el-form-item v-if="showAreaSource === true" :label="$t('views.operatorMeasure.label.areaSource')" prop="idTankSource">
                                <el-select v-model="MeasureData.idTankSource" :placeholder="$t('views.operatorMeasure.placeholder.tankSource')">
                                        <el-option v-for="item in AreaSourceOptions" :key="item.idTank" :label="item.name1" :value="item.idTank"></el-option>
                                </el-select>
                        </el-form-item>

                        <el-form-item v-if="showAreaDest === true" :label="$t('views.operatorMeasure.label.areaDestination')"  prop="idTankDest">
                                <el-select v-model="MeasureData.idTankDest" :placeholder="$t('views.operatorMeasure.placeholder.tankDest')">
                                        <el-option v-for="item in AreaDestOptions" :key="item.idTank" :label="item.name1" :value="item.idTank"></el-option>
                                </el-select>
                        </el-form-item>

                        <el-form-item :label="$t('views.operatorMeasure.label.qtyTank')" prop="measure1">
                                <el-input v-model="MeasureData.measure1" @change="onChangeMeasurement()"></el-input>
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
        private measure = ""

        private showAreaSource = true
        private showAreaDest = true

        created() {
            if ( this.AreaSourceOptions === '') { this.showAreaSource  = false}
            if ( this.AreaDestOptions === '') { this.showAreaDest  = false}
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

        private calculationLosse() {
            const retour = ""
            const measure = parseFloat (this.MeasureData.measure1)
            if (isNaN(measure)) { return "" }
            return Number(measure.toFixed(2))
        }
        onChangeMeasurement() {
           this.MeasureData.losses = this.calculationLosse ()
        }
        onChangeProduct() {
            const product = this.findSelectProductCaracterisque( this.MeasureData.idProduct )
            this.selectProductName = product.productName
            this.selectProductTs = product.productTS
            this.MeasureData.ts = product.productTS
            this.selectProductPrice = product.productPrice
        }

        private handleMeasureCancel() {
            this.$emit('EditFormCancel', this.MeasureData)
        }
        private handleMeasureCreation() {
            (this.$refs.measureForm as ElForm).validate(async(valid: boolean) => {
                if (valid) {
                        this.MeasureData.ts1 = 0
                        this.MeasureData.measure2 = 0
                        this.MeasureData.ts2 = 0
                        this.MeasureData.measure3 = 0
                        this.MeasureData.ts3 = 0
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
