<template>
    <div class="factoryArea-container">
        <TableAdminArea></TableAdminArea>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import TableAdminArea from '@/components/Tables/Admin/TableAdminArea.vue'

    @Component({
        name: 'factoryArea',
        components: {
            TableAdminArea,
        },
    })
    export default class  extends Vue {}
</script>

