<template>
    <div class="factoryOperatorFunctAll-container">
        <h2>{{ $t('screen.operatorFunctAll') }}</h2>
        <h4>Id Factory: {{ idFactory }}</h4>
        <h4>Username   : {{ username }}</h4>
        <h4>Email      : {{ email }}</h4>
        <h4>User Level : {{ userLevel }}</h4>
        <TableOperatorFonctionAll :idFactory=idFactory></TableOperatorFonctionAll>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import TableOperatorFonctionAll from '@/components/Tables/TableOperatorFonctionAll.vue'
    import { UserModule } from '@/store/modules/user'
    @Component({
        name: 'factoryOperatorFonctionAll',
        components: {
            TableOperatorFonctionAll,
        },
    })
    export default class extends Vue {
        private idFactory = ""
        private username = ""
        private email = ""
        private userLevel: string[] = []
        created() {
            this.idFactory= UserModule.idFactory
            this.username = UserModule.username
            this.email = UserModule.email
            this.userLevel = UserModule.roles
        }
    }
</script>


