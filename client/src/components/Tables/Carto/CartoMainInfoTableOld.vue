<template>
    <div class="table-carto-normale" :class="className">
        <h4>{{ tableData.title.text }}</h4>
        <ul>
            <li>{{ tableData.columns.text[0]}}
                <ul>
                    <li>{{tableData.fonctionNb}} {{ tableData.columns.text[1]}}</li>
                    <li>{{ tableData.columns.text[2] }} {{ tableData.fonctionInitAnnualPrice }} {{ tableData.columns.text[4] }}</li>
                    <li>{{ tableData.columns.text[3] }} {{ tableData.fonctionCurrentAnnualPrice }} {{ tableData.columns.text[5] }}</li>
                </ul>
            </li>
            <li>{{ tableData.columns.text[6] }}
                <ul>
                    <li>{{ tableData.fonctionNotDone }} {{ tableData.columns.text[7] }}</li>
                </ul>
            </li>
            <li>{{ tableData.columns.text[8] }}
                <ul>
                    <li>{{ tableData.fonctionDone }} {{ tableData.columns.text[9] }} {{ tableData.fonctionInAlarm }} {{ tableData.columns.text[10] }}</li>
                    <li>{{ tableData.columns.text[11] }} {{ tableData.fonctionNotLink }} {{ tableData.columns.text[12] }}</li>
                    <li>{{ tableData.columns.text[13] }} {{ tableData.fonctionNotLinkInitialLosse }} {{ tableData.columns.text[14] }}</li>
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

