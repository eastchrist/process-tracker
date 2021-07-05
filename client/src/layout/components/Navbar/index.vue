<template>
    <!-- <div class="navbar"> -->
    <v-toolbar class="navbar" dark prominent src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggle-click="toggleSideBar"/>
        <v-spacer></v-spacer>
        <div class="right-menu">
            <template v-if="device==='1'">
                <span v-if="UserCurrent.username" class="right-menu-item-texte">{{ $t('navigation.wellcome') }} {{ UserCurrent.username }} {{ $t('navigation.to') }} {{ UserCurrent.factoryName }}  &nbsp;</span>
                <span v-if="!UserCurrent.username" class="right-menu-item-texte">You are not logged in!  &nbsp;</span>

                <router-link to="/login" v-if="!UserCurrent.username" class="right-menu-item">
                    <PersoIcons name="ant-design:login-outlined" class="right-menu-item hover-effect" width='3em' height='3em' />
                </router-link>
                <PersoIcons v-if="UserCurrent.username" name="ant-design:logout-outlined" class="right-menu-item hover-effect" width='3em' height='3em' @click.native="logOut"/>
                <router-link to="/register" class="right-menu-item">
                    <PersoIcons name="ic-baseline-app-registration" class="right-menu-item hover-effect" width='3em' height='3em' />
                </router-link>

                <screenfull class="right-menu-item hover-effect" />
                <lang-selection class="right-menu-item hover-effect" />

                <!--
                <el-button v-if="UserCurrent.username" type="success" @click.native="logOut" class="right-menu-item" >LogOut</el-button>
                <router-link to="/login" v-if="!UserCurrent.username" class="right-menu-item">
                    <el-button type="primary" class="right-menu-item" >LogIn</el-button>
                </router-link>
                <router-link to="/register" class="right-menu-item">
                    <el-button type="info" class="right-menu-item" >Register</el-button>
                </router-link>
                -->
            </template>
            <template v-if="device === '0'">
                <router-link to="/login" v-if="!UserCurrent.username" class="right-menu-item">
                    <PersoIcons name="ant-design:login-outlined" class="right-menu-item hover-effect" width='3em' height='3em' />
                </router-link>
                <PersoIcons v-if="UserCurrent.username" name="ant-design:logout-outlined" class="right-menu-item hover-effect" width='3em' height='3em' @click.native="logOut"/>
                <lang-selection class="right-menu-item hover-effect" />
            </template>
        </div>
    </v-toolbar>
    <!-- </div> -->
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator'
    import { AppModule } from '@/store/modules/app'
    import { UserModule } from '@/store/modules/user'
    //import ErrorLog from '@/componentsOld/ErrorLog/index.vue'
    import Hamburger from '@/components/Hamburger/index.vue'
    import Screenfull from '@/components/Screenfull/index.vue'
    import LangSelection from '@/components/LangSelect/index.vue'

    import { AIUserState } from '@/api/types'
    import { defaultUser } from '@/api/users'

    const UserCurrent: AIUserState = defaultUser

    @Component({
        name: 'navbar',
        components: {
            //ErrorLog,
            Hamburger,
            LangSelection,
            Screenfull
        }
    })
    export default class extends Vue {
        @Watch('this.UserCurrent', { deep: true })
        private onChartDataChange(value: AIUserState) {
            console.log("User_onChartDataChange")
            this.updateUser()
        }


        private UserCurrent = UserCurrent

        //Function System
        get sidebar() {
            return AppModule.sidebar
        }
        get device() {
            const ccaTest = AppModule.device.toString()
            const ccaTest1 = ccaTest.toString()
            return AppModule.device.toString()
        }
        private toggleSideBar() {
            AppModule.ToggleSideBar(false)
        }

        private async logOut() {
            await UserModule.LogOut()
            this.UserCurrent = defaultUser
            this.$router.push( { path: '/' }).catch(err => {
                console.warn(err)
            })
        }

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

<style lang="scss" scoped>
    .navbar {
        height: $navbarHeight;
        overflow: hidden;
        position: relative;
        background: $navbarBackgroundColor;
        box-shadow: 0 1px 4px rgba(0,21,41,.08);
        .hamburger-container {
            line-height: 46px;
            height: 100%;
            float: left;
            padding: 0 15px;
            cursor: pointer;
            transition: background .3s;
            -webkit-tap-highlight-color:transparent;
            &:hover {
                background: rgba(0, 0, 0, .025)
            }
        }
        .breadcrumb-container {
            float: left;
        }
        .right-menu {
            float: right;
            //height: 100%;
            //line-height: 50px;
            &:focus {
                outline: none;
            }
            .right-menu-item {
                display: inline-block;
                padding: 0px 8px;
                height: 100%;
                font-size: 18px;
                color: $navbarItemColor;
                vertical-align: text-bottom;
                &.hover-effect {
                    cursor: pointer;
                    transition: background .3s;

                    &:hover {
                        background: rgba(0, 0, 0, .025)
                    }
                }
            }
            .right-menu-item-texte {
                display: inline-block;
                padding: 0 8px;
                height: 100%;
                font-size: 18px;
                color: $navbarTextColor;
                vertical-align: text-bottom;
                &.hover-effect {
                    cursor: pointer;
                    transition: background .3s;

                    &:hover {
                        background: rgba(0, 0, 0, .025)
                    }
                }
            }
        }
    }
</style>
