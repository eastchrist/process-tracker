<template>
    <section class="dialogMain" >
        <div class="container">
            <div class="dialog-body">
                <!-- Elements -->
                <div class="dialog-header">
                                <!-- <img src="@/assets/logoEntreprise/ProcessControl.png" alt=""> -->
                                <h3>{{ $t('views.login.title') }}</h3>
                            </div>
                <div class="dialog-form">
                                <el-form class="submitForm col" ref="submitForm" :rules="rules" :model="tempData">
                                    <el-form-item prop="username">
                                                <span class="svg-container"><PersoIcons name="user" width='1em' height='1em'/></span>
                                                <el-input ref="username" v-model="tempData.username" :placeholder="$t('views.login.placeholders.placeholder1')" name="username" type="text" tabindex="1" autocomplete="on"/>
                                            </el-form-item>
                                    <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
                                                <el-form-item prop="password">
                                                    <span class="svg-container"><PersoIcons name="password" width='1em' height='1em'/></span>
                                                    <el-input :key="passwordType" ref="password" v-model="tempData.password" :type="passwordType" :placeholder="$t('views.login.placeholders.placeholder2')" name="password" @blur="capsTooltip = false" @keyup.native="checkCapslock" @keyup.enter.native="handleSubmit" tabindex="2" autocomplete="on"/>
                                                    <span class="show-pwd" @click="showPwd"><PersoIcons :name="passwordType === 'password' ? 'eye-off' : 'eye-on'" width='1em' height='1em'/></span>
                                                </el-form-item>
                                            </el-tooltip>
                                    <el-button type="primary" class="btn btn-secondary rounded-pill px-md-5 px-4 py-2 radius-0 text-light light-300"  @click.native.prevent="handleSubmit">{{ $t('views.login.bouton') }}</el-button>
                                </el-form>
                            </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator'
    import { Route } from 'vue-router'
    import { Dictionary } from 'vue-router/types/router'
    import { Form as ElForm, Input } from 'element-ui'
    import { UserModule } from '@/store/modules/user'
    //import {LocaleMessage, LocaleMessageObject} from "vue-i18n";
    import { defaultLoginData, defaultLoginRules } from '@/api/contactUs'

    @Component({
        name: 'Login',
        components: {

        }
    })
    export default class extends Vue {
        private rules = defaultLoginRules
        private tempData = defaultLoginData

        private passwordType = 'password'
        private loading = false
        //private showDialog = false
        private capsTooltip = false
        private redirect?: string
        private otherQuery: Dictionary<string> = {}
        @Watch('$route', { immediate: true })
        private onRouteChange(route: Route) {
            const query = route.query as Dictionary<string>
            if (query) {
               this.redirect = query.redirect
                this.otherQuery = this.getOtherQuery(query)
            }
        }

        mounted() {
            this.tempData = {
                username: "",
                password: ""
            }
        }
        private checkCapslock(e: KeyboardEvent) {
            const { key } = e
            this.capsTooltip = key !== null && key.length === 1 && (key >= 'A' && key <= 'Z')
        }
        private showPwd() {
            if (this.passwordType === 'password') {
                this.passwordType = ''
            } else {
                this.passwordType = 'password'
            }
            this.$nextTick(() => {
                (this.$refs.password as Input).focus()
            })
        }
        private handleSubmit() {
            (this.$refs.submitForm as ElForm).validate(async(valid: boolean) => {
                if (valid) {
                    this.loading = true
                    const { data } = await UserModule.Login(this.tempData)
                    if (data.code) {
                        const message: any = this.$t('message.'+ data.code + "")
                        this.$notify({
                            title: this.$t('message.titleError') + "",
                            message: message,
                            type: 'error',
                            duration: 2000
                        })
                        this.$router.push({
                            path: '/login',
                            query: this.otherQuery
                        })
                    }
                    else {
                        this.$notify({
                            title: "",
                            message: this.$t('notify.notify5.message') + "",
                            type: 'success',
                            duration: 2000
                        })
                        UserModule.SetLoginToken(data)
                        this.tempData = {
                            username: "",
                            password: ""
                        }
                        this.$router.push({
                            path: this.redirect || '/',
                            query: this.otherQuery
                        })
                    }
                } else {
                    return false
                }
            })
        }
        private getOtherQuery(query: Dictionary<string>) {
            return Object.keys(query).reduce((acc, cur) => {
                if (cur !== 'redirect') {
                    acc[cur] = query[cur]
                }
                return acc
            }, {} as Dictionary<string>)
        }
    }
</script>

