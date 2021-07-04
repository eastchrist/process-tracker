<template>
    <footer id="footer">
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-8 footer-info">
                        <h3>{{ $t('views.footer.title') }}</h3>
                    </div>
                    <div class="col-lg-4 col-md-8 footer-links">
                        <h4>{{ $t('views.footer.usefulLinks.title') }}</h4>
                        <ul>
                            <li><i class="el-icon-arrow-right"></i> <router-link to="/">{{ $t('views.footer.usefulLinks.home') }}</router-link></li>
                            <li><i class="el-icon-arrow-right"></i> <router-link to="/Entreprise/Entreprise">{{ $t('views.footer.usefulLinks.aboutUs') }}</router-link></li>
                            <li><i class="el-icon-arrow-right"></i> <router-link to="/Methodology/Methodology">{{ $t('views.footer.usefulLinks.services') }}</router-link></li>
                            <li><i class="el-icon-arrow-right"></i> <router-link to="/ContactUs/ContactUs">{{ $t('views.footer.usefulLinks.contactUs') }}</router-link></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-8 footer-contact">
                        <h4>{{ $t('views.footer.contactUs') }}</h4>
                        <p>
                            {{ $t('views.coord.street') }} <br>
                            {{ $t('views.coord.town') }} <br>
                            {{ $t('views.coord.country') }} <br>
                            <strong>{{ $t('views.footer.phone1') }}</strong> {{ $t('views.coord.phone1') }}<br>
                            <strong>{{ $t('views.footer.phone2') }}</strong> {{ $t('views.coord.phone2') }}<br>
                            <strong>{{ $t('views.footer.email') }}</strong> {{ $t('views.coord.email') }}<br>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                &copy; Copyright <strong>{{ $t('views.footer.copyright') }}</strong>. All Rights Reserved
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'

    @Component({
        name: 'PageFooter',
        components: {}
    })
    export default class extends Vue {

    }
</script>

<style lang="scss" scoped>
    //height: $footerHeight;
    //background: $footerBackgroundColor;
    //Remove
    #footer {
        padding: 0 0 30px 0;
        background: $footerBackgroundColor;
        color: $footerColorMain;
        font-size: 14px;
    }
    #footer .footer-top {
        background: $footerTopBackgroundColor;
        padding: 60px 0 30px 0;
    }

    #footer .footer-top .footer-info {
        margin-bottom: 30px;
    }
    #footer .footer-top .footer-info h3 {
        font-size: 34px;
        margin: 0 0 20px 0;
        padding: 2px 0 2px 10px;
        line-height: 1;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        letter-spacing: 3px;
        border-left: 4px solid $footerBorderColor;
    }
    #footer .footer-top .footer-info p {
        font-size: 14px;
        line-height: 24px;
        margin-bottom: 0;
        font-family: "Montserrat", sans-serif;
        color: $footerColorMain;
    }

    #footer .footer-top h4 {
        font-size: 14px;
        font-weight: bold;
        color: $footerColorParagh;
        text-transform: uppercase;
        position: relative;
        padding-bottom: 12px;
    }
    #footer .footer-top h4::before, #footer .footer-top h4::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
    }
    #footer .footer-top h4::before {
        right: 0;
        background: #555;
    }
    #footer .footer-top h4::after {
        background: $footerBorderColor;
        width: 60px;
    }

    #footer .footer-top .footer-links {
        margin-bottom: 30px;
    }
    #footer .footer-top .footer-links ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    #footer .footer-top .footer-links ul i {
        padding-right: 8px;
        color: $footerLinkIconColor;
    }
    #footer .footer-top .footer-links ul li {
        border-bottom: 1px solid #333;
        padding: 10px 0;
    }
    #footer .footer-top .footer-links ul li:first-child {
        padding-top: 0;
    }
    #footer .footer-top .footer-links ul a {
        color: $footerColorMain;
    }
    #footer .footer-top .footer-links ul a:hover {
        color: $footerLinkOverColor;
    }

    #footer .footer-top .footer-contact {
        margin-bottom: 30px;
    }
    #footer .footer-top .footer-contact p {
        line-height: 26px;
    }

    #footer .copyright {
        text-align: center;
        padding-top: 30px;
    }
</style>
