<template>
    <div :class="className">
        <h4>{{ tableData.title.title }}</h4>
        <ul>
            <li>{{ tableData.textColumn[0]}}
                <ul>
                    <li>{{tableData.fonctionNb}} {{ tableData.textColumn[1]}}</li>
                    <li>{{ tableData.textColumn[2] }} {{ tableData.fonctionInitAnnualPrice }} {{ tableData.textColumn[4] }}</li>
                    <li>{{ tableData.textColumn[3] }} {{ tableData.fonctionCurrentAnnualPrice }} {{ tableData.textColumn[5] }}</li>
                </ul>
            </li>
            <li>{{ tableData.textColumn[6] }}
                <ul>
                    <li>{{ tableData.fonctionNotDone }} {{ tableData.textColumn[7] }}</li>
                </ul>
            </li>
            <li>{{ tableData.textColumn[8] }}
                <ul>
                    <li>{{ tableData.fonctionDone }} {{ tableData.textColumn[9] }} {{ tableData.fonctionInAlarm }} {{ tableData.textColumn[10] }}</li>
                    <li>{{ tableData.textColumn[11] }} {{ tableData.fonctionNotLink }} {{ tableData.textColumn[12] }}</li>
                    <li>{{ tableData.textColumn[13] }} {{ tableData.fonctionNotLinkInitialLosse }} {{ tableData.textColumn[14] }}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'

    @Component({
        name: 'CartoMainInfoTable.vue',
        components: {
        }
    })
    export default class CartoMainInfoTable extends Vue {
        @Prop({ default: '' }) private className!: string
        @Prop({ default: 'currency' }) private currency!: string
        @Prop({ default: { } }) private tableData!: any

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
    ul {
        list-style-type: none;
        margin: 0;
        padding: 30px;
        background: red;
    }
</style>
