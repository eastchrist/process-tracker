<template>
    <div class="login-container">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">
            <div class="title-container">
                <h3 class="title">{{ $t('register.title') }}</h3>
            </div>
            <el-form-item prop="username">
                <span class="svg-container"><svg-icon name="user" /></span>
                <el-input ref="username" v-model="loginForm.username" :placeholder="$t('register.username')" name="username" type="text" tabindex="1" autocomplete="on"/>
            </el-form-item>

            <el-form-item prop="email">
                <span class="svg-container"><svg-icon name="email" /></span>
                <el-input ref="email" v-model="loginForm.email" :placeholder="$t('register.email')" name="email" type="text" tabindex="1" autocomplete="on"/>
            </el-form-item>

            <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
                <el-form-item prop="password">
                    <span class="svg-container"><svg-icon name="password" /></span>
                    <el-input :key="passwordType" ref="password" v-model="loginForm.password" :type="passwordType" :placeholder="$t('register.password')" name="password" tabindex="2" autocomplete="on" @keyup.native="checkCapslock" @blur="capsTooltip = false" @keyup.enter.native="handleLogin"/>
                    <span class="show-pwd" @click="showPwd"><svg-icon :name="passwordType === 'password' ? 'eye-off' : 'eye-on'" /></span>
                </el-form-item>
            </el-tooltip>
            <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
                <el-form-item prop="Confpassword">
                    <span class="svg-container"><svg-icon name="password" /></span>
                    <el-input :key="ConfpasswordType" ref="Confpassword" v-model="loginForm.Confpassword" :type="ConfpasswordType" :placeholder="$t('register.Confpassword')" name="Confpassword" tabindex="2" autocomplete="on" @keyup.native="checkCapslock" @blur="capsTooltip = false" @keyup.enter.native="handleLogin"/>
                    <span class="show-pwd" @click="showConfPwd"><svg-icon :name="ConfpasswordType === 'password' ? 'eye-off' : 'eye-on'" /></span>
                </el-form-item>
            </el-tooltip>

            <el-button :loading="loading" type="primary" style="width:100%; margin-bottom:30px;" @click.native.prevent="handleLogin">{{ $t('register.register') }}</el-button>
        </el-form>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator'
    import { Route } from 'vue-router'
    import { Dictionary } from 'vue-router/types/router'
    import { Form as ElForm, Input } from 'element-ui'
    import { UserModule } from '@/store/modules/user'
    import { ElNotificationOptions } from 'element-ui/types/notification';

    @Component({
        name: 'Register',
        components: {
        },
    })
    export default class extends Vue {
        private validateUsername = (rule: any, value: string, callback: Function) => {
            if (value.length < 3) {
                callback(new Error( `${this.$t(`message.40001`)}` ))
            } else {
                callback()
            }
        }
        private validateEmail = (rule: any, value: string, callback: Function) => {
            if (value.length < 5) {
                callback(new Error( `${this.$t(`message.40002`)}` ))
            } else {
                callback()
            }
        }
        private validatePassword = (rule: any, value: string, callback: Function) => {
            if (value.length < 5) {
                callback(new Error( `${this.$t(`message.40003`)}` ))
            } else {
                callback()
            }
        }
        private validateConfPassword = (rule: any, value: string, callback: Function) => {
            if (value.length < 5) {
                callback(new Error( `${this.$t(`message.40004`)}` ))
            } else {
                callback()
            }
        }

        private loginForm = {
            username: '',
            email: '',
            password: '',
            Confpassword: ''
        }
        private loginRules = {
            username: [{ validator: this.validateUsername, trigger: 'blur' }],
            email: [{ validator: this.validateEmail, trigger: 'blur' }],
            password: [{ validator: this.validatePassword, trigger: 'blur' }],
            Confpassword: [{ validator: this.validateConfPassword, trigger: 'blur' }],
        }

        private passwordType = 'password'
        private ConfpasswordType = 'password'
        private loading = false
        private capsTooltip = false
        private redirect?: string
        private otherQuery: Dictionary<string> = {}
        @Watch('$route', { immediate: true })
        private onRouteChange(route: Route) {
            // TODO: remove the "as Dictionary<string>" hack after v4 release for vue-router
            // See https://github.com/vuejs/vue-router/pull/2050 for details
            const query = route.query as Dictionary<string>
            if (query) {
                this.redirect = query.redirect
                this.otherQuery = this.getOtherQuery(query)
            }
        }

        mounted() {
            if (this.loginForm.username === '') {
                (this.$refs.username as Input).focus()
            } else if (this.loginForm.email === '') {
                (this.$refs.email as Input).focus()
            } else if (this.loginForm.password === '') {
                (this.$refs.password as Input).focus()
            } else if (this.loginForm.Confpassword === '') {
                (this.$refs.Confpassword as Input).focus()
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
        private showConfPwd() {
            if (this.ConfpasswordType === 'password') {
                this.ConfpasswordType = ''
            } else {
                this.ConfpasswordType = 'password'
            }
            this.$nextTick(() => {
                (this.$refs.Confpassword as Input).focus()
            })
        }
        private handleLogin() {
            (this.$refs.loginForm as ElForm).validate(async(valid: boolean) => {
                if (valid) {
                    this.loading = true
                    const { data } = await UserModule.Register(this.loginForm)
                    if (data.code) {
                        //TODO
                        //const message  = this.$t('message.'+ data.code + "")
                        //this.$notify({
                       //     title: this.$t('message.titleError') + "",
                       //     message: message,
                       //     type: 'error',
                       //     duration: 2000
                       // })
                        this.$router.push({
                            path: this.redirect || '/',
                            query: this.otherQuery
                        })
                    }
                    else {
                        this.$notify({
                            title: "",
                            message: this.$t('tables.generique.notify.notify2.message') + "",
                            type: 'success',
                            duration: 2000
                        })
                        this.$router.push({
                            path: this.redirect || '/',
                            query: this.otherQuery
                        })
                    }
                    //console.log(this.otherQuery)
                    //this.$router.push({
                    //    path: this.redirect || '/',
                    //    query: this.otherQuery
                    //})
                    //    .catch(err => {
                    //    console.warn(err)
                    //})
                    // Just to simulate the time of the request
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

<style lang="scss">
    // References: https://www.zhangxinxu.com/wordpress/2018/01/css-caret-color-first-line/
    @supports (-webkit-mask: none) and (not (cater-color: #fff)) {
        .login-container .el-input {
            input { color: #fff; }
            input::first-line { color: #eee; }
        }
    }
    .login-container {
        .el-input {
            display: inline-block;
            height: 47px;
            width: 85%;

            input {
                height: 47px;
                background: transparent;
                border: 0px;
                border-radius: 0px;
                padding: 12px 5px 12px 15px;
                color: #eee;
                caret-color: #fff;
                -webkit-appearance: none;

                &:-webkit-autofill {
                    box-shadow: 0 0 0px 1000px #2d3a4b inset !important;
                    -webkit-text-fill-color: #fff !important;
                }
            }
        }

        .el-form-item {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            color: #454545;
        }
    }
</style>
<style lang="scss" scoped>
    .login-container {
        height: 100%;
        width: 100%;
        overflow: hidden;
        background-color: #2d3a4b;

        .login-form {
            position: relative;
            width: 520px;
            max-width: 100%;
            padding: 160px 35px 0;
            margin: 0 auto;
            overflow: hidden;
        }
        .tips {
            font-size: 14px;
            color: #fff;
            margin-bottom: 10px;

            span {
                &:first-of-type {
                    margin-right: 16px;
                }
            }
        }
        .svg-container {
            padding: 6px 5px 6px 15px;
            color: #889aa4;
            vertical-align: middle;
            width: 30px;
            display: inline-block;
        }
        .title-container {
            position: relative;

            .title {
                font-size: 26px;
                color: #eee;
                margin: 0px auto 40px auto;
                text-align: center;
                font-weight: bold;
            }

            .set-language {
                color: #fff;
                position: absolute;
                top: 3px;
                font-size: 18px;
                right: 0px;
                cursor: pointer;
            }
        }
        .show-pwd {
            position: absolute;
            right: 10px;
            top: 7px;
            font-size: 16px;
            color: #889aa4;
            cursor: pointer;
            user-select: none;
        }
        .thirdparty-button {
            position: absolute;
            right: 0;
            bottom: 6px;
        }

        @media only screen and (max-width: 470px) {
            .thirdparty-button {
                display: none;
            }
        }
    }
</style>
