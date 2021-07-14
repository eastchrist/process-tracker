<template>
    <!--
    <table style="width:100%; height :100%;" >
    -->
    <div class="TableContainer" >
        <table class="Table" style="width:100%" >
            <thead>
                    <tr >
                        <th class="Header" colspan="4">Test de titre</th>
                    </tr>
                    <tr >
                            <th class="SubHeader" >Header 1</th>
                            <th class="SubHeader" >Header 2</th>
                            <th class="SubHeader" >Header 3</th>
                            <th class="SubHeader" >Header 4</th>
                    </tr>
            </thead>
            <tbody>
                    <tr >
                            <th  class="Col" >Titre Column1</th>
                            <td  class="Col" >V1 Column 1</td>
                            <td  class="Col" >V2 Column 1</td>
                            <td  class="Col" >V3 Column 1</td>
                    </tr>
                    <tr >
                            <th  class="Col" >Titre Column2</th>
                            <td  class="Col" >V1 Column 2</td>
                            <td  class="Col" >V2 Column 2</td>
                            <td  class="Col" >V3 Column 2</td>
                    </tr>
                    <tr >
                            <th  class="Col">Titre Column3</th>
                            <td  class="Col">V1 Column 3</td>
                            <td  class="Col">V2 Column 3</td>
                            <td  class="Col">V3 Column 3</td>
                    </tr>
                    <tr >
                            <th  class="Col">Titre Column4</th>
                            <td  class="Col">V1 Column 4</td>
                            <td  class="Col">V2 Column 4</td>
                            <td  class="Col">V3 Column 4</td>
                    </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'

    @Component({
        name: 'CartoMainTableTest',
        components: {
        }
    })
    export default class CartoMainTableTest extends Vue {
    
    }
</script>

<style lang="scss" scoped>
        .TableContainer {
                overflow: auto;
                //border: 10px solid #555;
                //text-align: center;
                //padding: 8px;
                .Table {
                        overflow: auto;
                        //border: 10px solid #555;
                        //text-align: center;
                        padding: 8px;
                        .Header {
                                overflow: auto;
                                border: 1px solid #555;
                                //text-align: center;
                                font-size: 50px;
                                //padding: 8px;
                                height: 3em;
                        }
                        .SubHeader {
                                overflow: auto;
                                border: 10px solid #555;
                                //text-align: center;
                                font-size: 20px;
                                //padding: 8px;
                                height: 3em;
                        }
                        .Col {
                                overflow: auto;
                                //border: 10px solid #555;
                                //text-align: center;
                                //padding: 8px;
                        }
                        
                }
                
        }
        
</style>
