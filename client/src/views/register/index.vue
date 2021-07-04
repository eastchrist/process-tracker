<template>
    <section id="sectionMain" class="section-bg wow fadeInUp">
        <div class="container">
            <div class="section-header">
                <img src="@/assets/logoEntreprise/ProcessControl.png" alt="">
                <h3>{{ $t('views.register.title') }}</h3>
            </div>
            <div class="form">
                <el-form class="submitForm col" ref="submitForm" :rules="rules" :model="tempData">
                    <div class="col-lg-6 mb-4">
                        <div class="form-floating">
                            <el-form-item prop="username">
                                <span class="svg-container"><PersoIcons name="user" width='1em' height='1em' /></span>
                                <el-input ref="username" v-model="tempData.username" :placeholder="$t('views.login.placeholders.placeholder1')" name="username" type="text" tabindex="1" autocomplete="on"/>
                            </el-form-item>
                        </div>
                    </div><!-- End Input Name -->
                    <div class="col-lg-6 mb-4">
                        <div class="form-floating">
                            <el-form-item prop="email">
                                <span class="svg-container"><PersoIcons name="email" width='1em' height='1em' /></span>
                                <el-input ref="email" v-model="tempData.email" :placeholder="$t('views.register.placeholders.placeholder2')" name="email" type="text" tabindex="2" autocomplete="on"/>
                            </el-form-item>
                        </div>
                    </div><!-- End Input Email -->
                    <div class="col-lg-6 mb-4">
                        <div class="form-floating">
                            <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
                                <el-form-item prop="password">
                                    <span class="svg-container"><PersoIcons name="password" width='1em' height='1em' /></span>
                                    <el-input :key="passwordType" ref="password" v-model="tempData.password" :type="passwordType" :placeholder="$t('views.register.placeholders.placeholder3')" name="password" @keyup.native="checkCapslock" @blur="capsTooltip = false" @keyup.enter.native="handleSubmit" tabindex="3" autocomplete="on"/>
                                    <span class="show-pwd" @click="showPwd"><PersoIcons :name="passwordType === 'password' ? 'eye-off' : 'eye-on'" width='1em' height='1em' /></span>
                                </el-form-item>
                            </el-tooltip>
                        </div>
                    </div><!-- End Input Password -->
                    <div class="col-lg-6 mb-4">
                        <div class="form-floating">
                            <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
                                <el-form-item prop="confPassword">
                                    <span class="svg-container"><PersoIcons name="password" width='1em' height='1em' /></span>
                                    <el-input :key="confPasswordType" ref="confPassword" v-model="tempData.confPassword" :type="confPasswordType" :placeholder="$t('views.register.placeholders.placeholder4')" name="Confpassword" @keyup.native="checkCapslock" @blur="capsTooltip = false" @keyup.enter.native="handleSubmit" tabindex="4" autocomplete="on"/>
                                    <span class="show-pwd" @click="showConfPwd"><PersoIcons :name="confPasswordType === 'password' ? 'eye-off' : 'eye-on'" width='1em' height='1em' /></span>
                                </el-form-item>
                            </el-tooltip>
                        </div>
                    </div><!-- End Input ConfPassword -->

                    <div class="col-md-12 col-12 m-auto text-end">
                        <el-button type="primary" class="btn btn-secondary rounded-pill px-md-5 px-4 py-2 radius-0 text-light light-300"  @click.native.prevent="handleSubmit">{{ $t('views.register.bouton') }}</el-button>
                    </div>
                </el-form>
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
    import { ElNotificationOptions } from 'element-ui/types/notification';
    import { defaultRegisterData, defaultRegisterRules } from '@/api/contactUs'

    @Component({
        name: 'Register',
        components: {
        },
    })
    export default class extends Vue {
        private rules = defaultRegisterRules
        private tempData = defaultRegisterData

        private passwordType = 'password'
        private confPasswordType = 'password'
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
            this.tempData = {
                username: "",
                email: "",
                password: "",
                confPassword: "",
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
            if (this.confPasswordType === 'password') {
                this.confPasswordType = ''
            } else {
                this.confPasswordType = 'password'
            }
            this.$nextTick(() => {
                (this.$refs.confPassword as Input).focus()
            })
        }
        private handleSubmit() {
            (this.$refs.submitForm as ElForm).validate(async(valid: boolean) => {
                if (valid) {
                    this.loading = true
                    const { data } = await UserModule.Register(this.tempData)
                    if (data.code) {
                        const message: any  = this.$t('message.'+ data.code + "")
                        this.$notify({
                            title: this.$t('message.titleError') + "",
                            message: message,
                            type: 'error',
                            duration: 2000
                        })
                        this.$router.push({
                            path: this.redirect || '/',
                            query: this.otherQuery
                        })
                    }
                    else {
                        this.$notify({
                            title: "",
                            message: this.$t('notify.notify2.message') + "",
                            type: 'success',
                            duration: 2000
                        })
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

<style lang="scss" scoped>
    #sectionMain {
        padding: 30px 0;
        background: $communBackgroundColor;
    }
    #sectionMain .section-header {
        border: $communHeaderBorderLength solid $communHeaderBorderColor;
        border-radius: $communHeaderBorderRadius;
        padding: 0px 60px 20px 60px;
        margin-bottom: 20px;
    }
    #sectionMain .section-header h3 {
        font-size: 32px;
        color: $communPageTitleColor;
        text-transform: uppercase;
        text-align: center;
        font-weight: 700;
        position: relative;
        padding-bottom: 15px;
    }
    #sectionMain .section-header h3::before {
        content: '';
        position: absolute;
        display: block;
        width: 120px;
        height: 1px;
        background: #ddd;
        bottom: 1px;
        left: calc(50% - 60px);
    }
    #sectionMain .section-header h3::after {
        content: '';
        position: absolute;
        display: block;
        width: 40px;
        height: 3px;
        background: $communPageIconColor;
        bottom: 0;
        left: calc(50% - 20px);
    }
    #sectionMain .section-header p {
        text-align: center;
        padding-bottom: 50px;
        color: #333;
    }

    #sectionMain .sectionMain-info {
        border: $communInfoBorderLength solid $communInfoBorderColor;
        border-radius: $communInfoBorderRadius;
        padding: 0px 60px 0px 60px;
        margin-bottom: 10px;
        text-align: center;
    }
    #sectionMain .sectionMain-info i {
        font-size: 48px;
        display: inline-block;
        margin-bottom: 10px;
        color: $communPageIconColor;
    }
    #sectionMain .sectionMain-info address, #sectionMain .sectionMain-info p {
        margin-bottom: 0;
        color: $communPageLinkColor;
    }
    #sectionMain .sectionMain-info h3 {
        font-size: 18px;
        margin-bottom: 15px;
        font-weight: bold;
        text-transform: uppercase;
        color: $communPageTitleColor;
    }
    #sectionMain .sectionMain-info a {
        color: $communPageLinkColor;
    }
    #sectionMain .sectionMain-info a:hover {
        color: #18d26e;
    }
    #sectionMain .sectionMain-address, #sectionMain .sectionMain-phone, #sectionMain .sectionMain-email {
        margin-bottom: 20px;
    }

    @media (min-width: 768px) {
        #sectionMain .sectionMain-address, #sectionMain .sectionMain-phone, #sectionMain .sectionMain-email {
            padding: 20px 0;
        }
    }
    @media (min-width: 768px) {
        #sectionMain .sectionMain-phone {
            border-left: 1px solid #ddd;
            border-right: 1px solid #ddd;
        }
    }

    #sectionMain .form {
        border: $communFormBorderLength solid $communFormBorderColor;
        border-radius: $communFormBorderRadius;
        padding: 40px 20px 40px 20px;
    }
    #sectionMain .form #sendmessage.show, #sectionMain .form #errormessage.show, #sectionMain .form .show {
        display: block;
    }
    .el-input {
        //background: #454545;
        display: inline-block;
        padding: 3px 0px 0px 10px;
        width: 85%;
        input {
            height: 47px;
            //background-color: #454545;
            //background: #454545;
            background: transparent;
            border: 0px;
            border-radius: 0px;
            padding: 12px 5px 12px 15px;
            //color: #454545;
            //caret-color: $loginCursorColor;
            -webkit-appearance: none;


        }
    }
    .svg-container {
        padding: 0px 0px 5px 10px;
        color: $communPageSvgColor;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
    }
    .show-pwd {
        padding: 0px 0px 5px 20px;
        color: $communPageSvgColor;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
    }
    .el-form-item {
        margin-bottom: 30px;
        border: 1px solid $communFormItemBorderColor;
        background: $communFormItemBackgroundColor;
        border-radius: 5px;
        color: #454545;
    }

    #sectionMain .form el-button[type="submit"] {
        background: $communPageIconColor;
        border: 0;
        padding: 10px 30px;
        color: #fff;
        transition: 0.4s;
        cursor: pointer;
    }
    #sectionMain .form el-button[type="submit"]:hover {
        background: #13a456;
    }
</style>
