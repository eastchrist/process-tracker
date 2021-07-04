<template>
    <div class="factoryUser-container">
        <TableAdminUser></TableAdminUser>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import TableAdminUser from '@/components/Tables/Admin/TableAdminUser.vue'

    @Component({
        name: 'factoryUser',
        components: {
            TableAdminUser
        },
    })
    export default class extends Vue {}
</script>

