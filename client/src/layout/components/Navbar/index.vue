<template>
    <div class="navbar">
        <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggle-click="toggleSideBar"/>
        <div class="right-menu">
            <template v-if="device!=='mobile'">
                <router-link to="/login">Login</router-link>
                <router-link to="/register">Register</router-link>


                <el-button type="primary" @click.native="logIn" >LogIn</el-button>
                <el-button type="success" @click.native="logout" >LogOut</el-button>
                <el-button type="info" @click.native="Register" >Register</el-button>
                <lang-selection class="right-menu-item hover-effect" />
            </template>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { AppModule } from '@/store/modules/app'
    import { UserModule } from '@/store/modules/user'
    import ErrorLog from '@/components/ErrorLog/index.vue'
    import Hamburger from '@/components/Hamburger/index.vue'
    import LangSelection from '@/components/LangSelect/index.vue'

    @Component({
        name: 'navbar',
        components: {
            ErrorLog,
            Hamburger,
            LangSelection
        }
    })
    export default class extends Vue {
        get sidebar() {
            return AppModule.sidebar
        }
        get device() {
            return AppModule.device.toString()
        }
        private toggleSideBar() {
            AppModule.ToggleSideBar(false)
        }
        private async logIn() {
            this.$router.push({ name: 'login' });
        }
        private async logOut() {
            await UserModule.LogOut()
            this.$router.push(`/login?redirect=${this.$route.fullPath}`).catch(err => {
                console.warn(err)
            })
        }
        private async Register() {
            this.$router.push({ name: '/register' });
        }
    }
</script>

<style lang="scss" scoped>
    .navbar {
        height: 50px;
        overflow: hidden;
        position: relative;
        background: #fff;
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
        .errLog-container {
            display: inline-block;
            vertical-align: top;
        }
        .right-menu {
            float: right;
            height: 100%;
            line-height: 50px;

            &:focus {
                outline: none;
            }

            .right-menu-item {
                display: inline-block;
                padding: 0 8px;
                height: 100%;
                font-size: 18px;
                color: #5a5e66;
                vertical-align: text-bottom;

                &.hover-effect {
                    cursor: pointer;
                    transition: background .3s;

                    &:hover {
                        background: rgba(0, 0, 0, .025)
                    }
                }
            }

            .avatar-container {
                margin-right: 30px;

                .avatar-wrapper {
                    margin-top: 5px;
                    position: relative;

                    .user-avatar {
                        cursor: pointer;
                        width: 40px;
                        height: 40px;
                        border-radius: 10px;
                    }

                    .el-icon-caret-bottom {
                        cursor: pointer;
                        position: absolute;
                        right: -20px;
                        top: 25px;
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>
