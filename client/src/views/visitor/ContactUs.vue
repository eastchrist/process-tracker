<template>
    <section id="sectionMain" class="section-bg wow fadeInUp">
        <div class="container">
            <div class="section-header">
                <h3>{{ $t('views.contactUs.title') }}</h3>
            </div>
            <div class="row sectionMain-info">
                <div class="col-md-4">
                    <div class="sectionMain-address">
                        <!-- <i></i> -->
                        <i>
                            <PersoIcons name="ion-ios-location-outline"></PersoIcons>
                        </i>
                        <h3>{{ $t('views.contactUs.address') }}</h3>
                        <address>{{ $t('views.coord.street') }}</address>
                        <address>{{ $t('views.coord.town') }}</address>
                        <address>{{ $t('views.coord.France') }}</address>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="sectionMain-phone">
                        <!-- <i><PersoIcons name="ion-ios-telephone-outline"></PersoIcons></i> -->
                        <i>
                            <PersoIcons name="ion-ios-telephone-outline"></PersoIcons>
                        </i>
                        <h3>{{ $t('views.contactUs.phoneNumber') }}</h3>
                        <p><a :href="'tel:' + $t('views.coord.phone1')">{{ $t('views.coord.countryPhone1') }} {{ $t('views.coord.phone1') }}</a></p>
                        <p><a :href="'tel:' + $t('views.coord.phone2')">{{ $t('views.coord.countryPhone2') }} {{ $t('views.coord.phone2') }}</a></p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="sectionMain-email">
                        <!-- <i><PersoIcons name="ion-ios-email-outline"></PersoIcons></i> -->
                        <i>
                            <PersoIcons name="ion-ios-email-outline"></PersoIcons>
                        </i>
                        <h3>{{ $t('views.contactUs.email') }}</h3>
                        <p><a :href="'mailto:' + $t('views.coord.email')">{{ $t('views.coord.email') }}</a></p>
                    </div>
                </div>
            </div>
            <div class="form">
                <el-form class="submitForm row" ref="submitForm" :rules="rules" :model="tempData">
                    <div class="col-lg-6 mb-4">
                        <div class="form-floating">
                            <el-form-item prop="username">
                                <span class="svg-container"><PersoIcons name="user" width='1em' height='1em'/></span>
                                <el-input ref="username" v-model="tempData.username" :placeholder="$t('views.contactUs.placeholders.placeholder1')" name="username" type="text"/>
                            </el-form-item>
                        </div>
                    </div><!-- End Input Name -->
                    <div class="col-lg-6 mb-4">
                        <div class="form-floating">
                            <el-form-item prop="email">
                                <span class="svg-container"><PersoIcons name="email" width='1em' height='1em' /></span>
                                <el-input ref="email" v-model="tempData.email" :placeholder="$t('views.contactUs.placeholders.placeholder2')" name="email" type="text"/>
                            </el-form-item>
                        </div>
                    </div><!-- End Input Email -->
                    <div class="col-12">
                        <div class="form-floating mb-4">
                            <el-form-item prop="subject">
                                <span class="svg-container"><PersoIcons name="edit" width='1em' height='1em' /></span>
                                <el-input ref="subject" v-model="tempData.subject" :placeholder="$t('views.contactUs.placeholders.placeholder3')" name="subject" type="text"/>
                            </el-form-item>
                        </div>
                    </div><!-- End Input Subject -->
                    <div class="col-12">
                        <div class="form-floating mb-3">
                            <el-form-item prop="message">
                                <el-input ref="message" v-model="tempData.message" :placeholder="$t('views.contactUs.placeholders.placeholder4')" name="message" type="textarea"/>
                            </el-form-item>
                        </div>
                    </div><!-- End Textarea Message -->
                    <div class="col-md-12 col-12 m-auto text-end">
                        <el-button type="primary" class="btn btn-secondary rounded-pill px-md-5 px-4 py-2 radius-0 text-light light-300"  @click.native.prevent="handleSubmit">{{ $t('views.contactUs.bouton') }}</el-button>
                    </div>
                </el-form>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { Form as ElForm } from 'element-ui'
    import { defaultContactUsData, defaultContactUsRules } from '@/api/contactUs'
    //import PersoIcons from '@/componentsOld/Icons/iconsOld.vue'

    @Component({
        components: {
            //PersoIcons
        },
    })
    export default class ContactUs extends Vue {
        private rules = defaultContactUsRules
        private tempData = defaultContactUsData
        private handleSubmit() {
            (this.$refs.submitForm as ElForm).validate(async(valid: boolean) => {
                if (valid) {
                    console.log("submitForm OK")
                } else {
                    console.log("submitForm NOK")
                }
            })
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
        width: 90%;
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
