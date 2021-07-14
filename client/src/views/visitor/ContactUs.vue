<template>
    <section class="dialogMain" >
        <div class="container">
            <div class="dialog-body">
                            <!-- Elements -->
                            <div class="dialog-header">
                                <h3>{{ $t('views.contactUs.title') }}</h3>
                            </div>
                            <div class="row dialog-info">
                                <div class="col-md-4">
                                    <div class="dialog-address">
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
                                    <div class="dialog-phone">
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
                                    <div class="dialog-email">
                                        <!-- <i><PersoIcons name="ion-ios-email-outline"></PersoIcons></i> -->
                                        <i>
                                            <PersoIcons name="ion-ios-email-outline"></PersoIcons>
                                        </i>
                                        <h3>{{ $t('views.contactUs.email') }}</h3>
                                        <p><a :href="'mailto:' + $t('views.coord.email')">{{ $t('views.coord.email') }}</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="dialog-form">
                                <el-form class="submitForm row" ref="submitForm" :rules="rules" :model="tempData">
                                    <el-form-item prop="username">
                                                <span class="svg-container"><PersoIcons name="user" width='1em' height='1em'/></span>
                                                <el-input ref="username" v-model="tempData.username" :placeholder="$t('views.contactUs.placeholders.placeholder1')" name="username" type="text" tabindex="1" autocomplete="on"/>
                                            </el-form-item>
                                    <el-form-item prop="email">
                                                <span class="svg-container"><PersoIcons name="email" width='1em' height='1em' /></span>
                                                <el-input ref="email" v-model="tempData.email" :placeholder="$t('views.contactUs.placeholders.placeholder2')" name="email" type="text" tabindex="2" autocomplete="on"/>
                                            </el-form-item>
                                    <el-form-item prop="subject">
                                                <span class="svg-container"><PersoIcons name="edit" width='1em' height='1em' /></span>
                                                <el-input ref="subject" v-model="tempData.subject" :placeholder="$t('views.contactUs.placeholders.placeholder3')" name="subject" type="text" tabindex="3" autocomplete="on"/>
                                            </el-form-item>
                                    <el-form-item prop="message">
                                                <el-input ref="message" v-model="tempData.message" :placeholder="$t('views.contactUs.placeholders.placeholder4')" name="message" type="textarea" tabindex="4" autocomplete="on"/>
                                            </el-form-item>
                                    <el-button type="primary" class="btn btn-secondary rounded-pill px-md-5 px-4 py-2 radius-0 text-light light-300"  @click.native.prevent="handleSubmit">{{ $t('views.contactUs.bouton') }}</el-button>
                                </el-form>
                            </div>
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

