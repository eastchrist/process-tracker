<template>
    <div :class="className" class="TreeNodes-container">
        <h3>{{ title }}</h3>
        <el-tree :data="treeDatas" :props="defaultProps" ></el-tree>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'
    //import { getAllNodes, defaultNodesFactory } from '@/api/nodes'
    import { getAllNodes } from '@/api/nodes'
    import { ITreeElementsFactory } from '@/api/types'
    import { createTreeFromNodes } from '@/utils/node'
    @Component({
        name: 'TreeNodes',
        components: {
        }
    })
    export default class Dashboard extends Vue {
        @Prop({ default: '' }) private className!: string
        @Prop({ default: 'TreeNodes-container' }) private title!: string
        @Prop({ default: 'Factory' }) private Find1!: string
        @Prop({ default: '' }) private Find2!: string
        @Prop({ default: '' }) private Find3!: string

        private treeDatas: ITreeElementsFactory[] = [];
        private defaultProps= {
            children: 'children',
            label: 'label'
        }
        //private listLoading = true
        //private tempNodesFactory = defaultNodesFactory
        created() {
            this.getList()
        }
        private async getList() {
            //this.listLoading = true
            const { data } = await getAllNodes()
            this.treeDatas = createTreeFromNodes( data, this.Find1, this.Find2, this.Find3)
            //this.listLoading = false
        }
    }
</script>
