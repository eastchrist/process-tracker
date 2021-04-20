<template>
    <div class="factoryUser-container">
        <h2>{{ $t('screen.factoryUser') }}</h2>
        <TableAdminUser></TableAdminUser>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import TableAdminUser from '@/components/Tables/TableAdminUser.vue'

    @Component({
        name: 'factoryUser',
        components: {
            TableAdminUser
        },
    })
    export default class extends Vue {}
</script>

