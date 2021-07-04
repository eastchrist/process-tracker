<template>
  <div :class="{'hidden': hidden}" class="pagination-container">
    <el-pagination :background="background"
                   :current-page.sync="currentPage"
                   :page-size.sync="pageSize"
                   :layout="layout"
                   :page-sizes="pageSizes"
                   :total="total" v-bind="$attrs"
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { scrollTo } from '@/utils/scroll-to'

@Component({
  name: 'Pagination'
})
export default class extends Vue {
  @Prop({ required: true }) private total!: number
  @Prop({ default: 1 }) private page!: number
  @Prop({ default: 20 }) private limit!: number
  @Prop({ default: () => [10, 20, 30, 50] }) private pageSizes!: number[]
  @Prop({ default: 'total, sizes, prev, pager, next, jumper' }) private layout!: string
  @Prop({ default: true }) private background!: boolean
  @Prop({ default: true }) private autoScroll!: boolean
  @Prop({ default: false }) private hidden!: boolean

  get currentPage() {
    console.log("Get_currentPage")
    return this.page
  }

  set currentPage(value) {
    console.log("Set_currentPage")
    this.$emit('update:page', value)
  }

  get pageSize() {
    console.log("Get_pageSize")
    return this.limit
  }

  set pageSize(value) {
    console.log("Set_pageSize")
    this.$emit('update:limit', value)
  }

  handleSizeChange(value: number) {
    console.log("handleSizeChange")
    this.$emit('pagination', { page: this.currentPage, limit: value })
    if (this.autoScroll) {
      scrollTo(0, 800)
    }
  }

  handleCurrentChange(value: number) {
    console.log("handleCurrentChange")
    this.$emit('pagination', { page: value, limit: this.pageSize })
    if (this.autoScroll) {
      scrollTo(0, 800)
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination-container {
  background: #fff;
  padding: 32px 16px;
}

.pagination-container.hidden {
  display: none;
}
</style>
