<template>
    <div :class="className">
        <br />
        <br />
        <br />
        <span >{{ $t('views.operatorMeasure.label.tables.calculFlow.label') }}</span>
        <br />
        <br />
        <table style="width:100%">
            <tr>
                <th style="width:20%">{{ $t('views.operatorMeasure.label.tables.calculFlow.champs1') }}</th>
                <th style="width:50%">{{ $t('views.operatorMeasure.label.tables.calculFlow.champs2') }}</th>
                <th style="width:15%">{{ $t('views.operatorMeasure.label.tables.calculFlow.champs3') }}</th>
                <th style="width:15%">{{ $t('views.operatorMeasure.label.tables.calculFlow.champs4') }}</th>
            </tr>
            <tr>
                <td>
                    <el-input type="number" v-model="calculFlowTime" ></el-input>
                </td>
                <td>
                    <el-input type="number" v-model="calculFlowFlow" style="width:50%"></el-input>
                    <el-select v-model="calculFlowUnit" @change="onChangeFlowUnit()" :placeholder="$t('views.operatorMeasure.placeholder.flow')" style="width:50%">
                        <el-option v-for="item in flowType" :key="item.id" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                </td>
                <td>
                    <el-input v-model="calculFlow" :disabled="true"></el-input>
                </td>
                <td>
                    <el-button type="primary" @click.native.prevent="handleFlowCalculation">{{ $t('views.operatorMeasure.button.calcul') }}</el-button>
                </td>
            </tr>
        </table>
        <br />
        <br />
        <span >{{ $t('views.operatorMeasure.label.tables.calculVolume.label') }}</span>
        <br />
        <br />
        <table style="width:100%">
            <tr>
                <th>{{ $t('views.operatorMeasure.label.tables.calculVolume.champs1') }}</th>
                <th>{{ $t('views.operatorMeasure.label.tables.calculVolume.champs2') }}</th>
                <th>{{ $t('views.operatorMeasure.label.tables.calculVolume.champs3') }}</th>
                <th>{{ $t('views.operatorMeasure.label.tables.calculVolume.champs4') }}</th>
            </tr>
            <tr>
                <td>
                    <el-input type="number" v-model="calculQtyLength" ></el-input>
                </td>
                <td>
                    <el-select v-model="calculQtyDiam" @change="onChangeFlowUnit()" :placeholder="$t('views.operatorMeasure.placeholder.flow')" style="width:100%">
                        <el-option v-for="item in calculQtyDiamList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                </td>
                <td>
                    <el-input v-model="calculQty" :disabled="true"></el-input>
                </td>
                <td>
                    <el-button type="primary" @click.native.prevent="handleQtyCalculation">{{ $t('views.operatorMeasure.button.calcul') }}</el-button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'

    @Component({
        name: 'AideCalculation',
        components: {
        }
    })
    export default class extends Vue {
        @Prop({ default: '' }) private className!: string
        private calculFlowTime = ""
        private calculFlowFlow = ""
        private calculFlowUnit = ""
        private calculFlow = ""
        private flowType = [
            { id: 'Liter/H', name: 'Liter/H'},
            { id: 'Liter/Min', name: 'Liter/Min'},
            { id: 'Gal/H', name: 'Gal/H'},
            { id: 'Gal/Min', name: 'Gal/Min'},
            ]

        private calculQtyLength = ""
        private calculQtyDiam = ""
        private calculQty = ""
        private calculQtyDiamList = [
            { id: '0.420', name: 'SMS (1")'},
            { id: '1.018', name: 'SMS (1"1/2)'},
            { id: '1.847', name: 'SMS (2")'},
            { id: '2.875', name: 'SMS (2"1/2)'},
            { id: '4.185', name: 'SMS (3")'},
            { id: '7.481', name: 'SMS (4")'},


            { id: '0.531', name: 'DIN (DN25)'},
            { id: '0.804', name: 'DIN (DN32)'},
            { id: '1.134', name: 'DIN (DN40)'},
            { id: '1.963', name: 'DIN (DN50)'},
            { id: '3.421', name: 'DIN (DN65)'},
            { id: '5.153', name: 'DIN (DN80)'},
            { id: '7.853', name: 'DIN (DN25)'},
        ]

        //Désignation           Diamètre    Diamètre     Epaisseur          Volume      Poids
        //25 SMS    (1")            25,4        23,4        1,00            0,420       0,601
        //38 SMS    (1"1/2)         38,0        36,0        1,00            1,018       0,926
        //51 SMS    (2")            51,0        48,5        1,25            1,847       1,535
        //63 SMS    (2"1/2)         63,5        60,5        1,50            2,875       2,343
        //76 SMS    (3")            76,2        73,0        1,60            4,185       3,095
        //101,6 SMS (4")            101,6       97,6        2,00            7,481       5,019

        //28 DIN (DN25)             28,0        26,0        1,00            0,531       0,680
        //34 DIN (DN32)             34,0        32,0        1,00            0,804       0,824
        //40 DIN (DN40)             40,0        38,0        1,00            1,134       0,982
        //50 DIN (DN50)             52,0        50,0        1,00            1,963       1,249
        //65 DIN (DN65)             70,0        66          2,00            3,421       3,360
        //80 DIN (DN80)             85,0        81,0        2,00            5,153       4;110
        //104 (DN100)               104,0       100,0       2,00            7,853       5,110


        onChangeFlowUnit() {
            console.log("TOTO")
        }
        private handleFlowCalculation() {
            const calculFlowTime = parseFloat( this.calculFlowTime )
            const calculFlowFlow = parseFloat( this.calculFlowFlow )
            if ((isNaN(calculFlowTime) !== true) && (isNaN(calculFlowFlow) !== true)) {
                if (this.calculFlowUnit === 'Liter/H') {
                    this.calculFlow = ((calculFlowTime * calculFlowFlow) / 3600).toFixed(2).toString();
                } else if (this.calculFlowUnit === 'Liter/Min') {
                    this.calculFlow = ((calculFlowTime * calculFlowFlow) / 60).toFixed(2).toString();
                } else if (this.calculFlowUnit === 'Gal/H') {
                    this.calculFlow = ((calculFlowTime * calculFlowFlow * 3.78541178) / 3600).toFixed(2).toString();
                } else if (this.calculFlowUnit === 'Gal/Min') {
                    this.calculFlow = ((calculFlowTime * calculFlowFlow * 3.78541178) / 60).toFixed(2).toString();
                } else {
                    this.calculFlow = ''
                }
            } else {
                this.calculFlow = '??'
            }
        }
        private handleQtyCalculation() {
            const calculQtyLength = parseFloat( this.calculQtyLength )
            const calculQtyDiam = parseFloat( this.calculQtyDiam )
            if ((isNaN(calculQtyLength) !== true) && (isNaN(calculQtyDiam) !== true)) {
                this.calculQty = (calculQtyLength * calculQtyDiam).toFixed(2).toString();
            } else {
                this.calculQty = '??'
            }
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
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input[type="number"]{
        -moz-appearance: textfield;
    }
</style>
