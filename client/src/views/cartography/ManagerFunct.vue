<template>
    <div class="ManagerFunction">
        <h1 class="title">ManagerFunction</h1>
        <div class="wrapper">
            <div class="header">
                <div class="headerContainer">
                    <div class="logoClient">
                        <img src='../../assets/logoEntreprise/Strauss.png' >
                    </div>
                    <div class="textHeader">
                        <h4>Loss Prevention mapping</h4>
                        <p>Final push yoghourt fermentation tank to Filler CCMA</p>
                    </div>
                    <div class="logoProcess">
                        <img src='../../assets/logoEntreprise/ProcessControl.png' >
                    </div>
                </div>
            </div>
            <div class="subHeader">
                <div class="subHeaderContainer">
                    <div class="product">product</div>
                    <div class="frequency">
                        <h4>Frequency :</h4>
                        <p>365 by year</p>
                    </div>
                    <div class="type">
                        <h4>Type :</h4>
                        <p>Water push</p>
                    </div>
                    <div class="nbControl">
                        <h4>Number of control :</h4>
                        <p>3 times/year</p>
                    </div>
                </div>
            </div>
            <div class="pictures">
                <div class="picturesContainer">
                    <div class="picture1">picture1</div>
                    <div class="picture2">picture2</div>
                </div>
            </div>
            <div class="content">
                <div class="contentContainer">
                    <div class="result">
                        <h4>Result :</h4>
                        <el-select placeholder="Product" clearable class="filter-item" style="width: 130px">
                            <el-option v-for="item in Type2Options" :key="item.id" :label="item.name" :value="item.id"/>
                        </el-select>
                        <el-select placeholder="Tank source" clearable class="filter-item" style="width: 130px">
                            <el-option v-for="item in Type2Options" :key="item.id" :label="item.name" :value="item.id"/>
                        </el-select>
                        <el-select placeholder="Tank Destination" clearable class="filter-item" style="width: 130px">
                            <el-option v-for="item in Type2Options" :key="item.id" :label="item.name" :value="item.id"/>
                        </el-select>

                        <el-table :data="tableData" style="width: 70%">
                            <el-table-column prop="measurement" label="Measurement" width="220"></el-table-column>
                            <el-table-column prop="quantity" label="Quantity" width="180"></el-table-column>
                            <el-table-column prop="tSolid" label="Total solid"></el-table-column>
                        </el-table>
                    </div>
                    <div class="method">
                        <h4>Verification method :</h4>
                        <p>During the priming inside the filler, count the number of dosage to obtain product with good viscosity and total solid.</p>
                        <p>Take a sample for the last one at the end</p>
                        <p>Give your samples to the lab to analysis total solids</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: {
        },
    })
    export default class extends Vue {}
</script>

<style lang="scss" scoped>
    .wrapper{
        height: 100%;
        display:grid;
        grid-gap: 3px;
        grid-template-columns:repeat(12, 1fr);
        grid-template-areas:
                ". h h h h h h h h h h ."
                ". s s s s s s s s s s ."
                ". . p p p p p p p p . ."
                ". c c c c c c c c c c ."
    }
    .header {
        //grid-column: span 12;
        grid-area:h;
        background:#eee;
        padding:1em;
        border:#333 1px solid;
    }
    .headerContainer{
        display:grid;
        grid-template-columns: 1fr 4fr 1fr;
        grid-auto-rows: 90px;
        grid-gap:1em;
    }
    .headerContainer > div{
        border:#333 1px solid;
        padding:1em;
    }

    .subHeader {
        grid-area:s;
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
        //grid-column: span 8;
        grid-area: p;
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

    .content {
        //grid-column: span 8;
        grid-area: c;
        background:#eee;
        padding:1em;
        border:#333 1px solid;
    }
    .contentContainer{
        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 90px;
        grid-gap:1em;
    }
    .contentContainer > div{
        border:#333 1px solid;
        padding:1em;
    }

</style>

