<template>
    <div class="factoryMainFonction-container">
        <main-project-overview :idFactory=UserCurrent.idFactory :isAdmin=isAdmin :isManagerEdit=isManagerEdit :isManager=isManager :isOperator=isOperator></main-project-overview>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator'
    import { UserModule } from '@/store/modules/user'
    import mainProjectOverview from '@/views/cartography/MainProject/index.vue'

    import { AIUserState } from '@/api/types'
    import { defaultUser } from '@/api/users'
    const UserCurrent: AIUserState = defaultUser

    @Component({
        name: 'factoryMainProject',
        components: {
            mainProjectOverview
        },
    })

    export default class extends Vue {
        @Watch('this.UserCurrent', { deep: true })
        private onChartDataChange(value: AIUserState) {
            console.log("User_onChartDataChange")
            this.updateUser()
        }

        private UserCurrent = UserCurrent
        private isAdmin = false
        private isManager = false
        private isManagerEdit = false
        private isOperator = false

        private updateUser() {
            if ((UserModule.username !== '') && (UserModule.username !== null)) {
                this.UserCurrent = {
                    token: UserModule.token,
                    username: UserModule.username,
                    email: UserModule.email,
                    idFactory: UserModule.idFactory,
                    factoryName: UserModule.factoryName,
                    roles: UserModule.roles,
                }
                this.isManagerEdit = false
                if (this.UserCurrent.roles.includes('admin')) { this.isAdmin = true }
                if (this.UserCurrent.roles.includes('manager')) { this.isManager = true }
                if (this.UserCurrent.roles.includes('operator')) { this.isOperator = true }
            }
            else { this.UserCurrent = {
                token: '',
                username: '',
                email: '',
                idFactory: '',
                factoryName: '',
                roles: [],
            } }
        }
        created() {
            this.updateUser()
        }
    }
</script>

