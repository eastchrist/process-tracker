<template>
    <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
        <button ><img :src= selectedFlag /></button>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item :disabled="language==='en'" command="en">English</el-dropdown-item>
            <el-dropdown-item :disabled="language==='fr'" command="fr">Francais</el-dropdown-item>
            <el-dropdown-item :disabled="language==='es'" command="es">Español</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { AppModule } from '@/store/modules/app'
    import settings from '../../settings'
    @Component({
        name: 'LangSelection'
    })

    export default class extends Vue {
        private selectedFlag = ''
        //private languages = [
        //    { name: 'English', languageCode: 'en', path: require('@/assets/flags/image/en.png') },
        //    { name: 'French', languageCode: 'fr', path: require('@/assets/flags/image/fr.png') },
        //    { name: 'Spanish', languageCode: 'es', path: require('@/assets/flags/image/es.png') },
        //]
        selectedLanguageFlag(locale: string) {
            switch (locale) {
                case 'en': return require('../../assets/flags/image/en.png')
                case 'fr': return require('../../assets/flags/image/fr.png')
                case 'es': return require('../../assets/flags/image/es.png')
            }
        }
        created() {
            this.selectedFlag = this.selectedLanguageFlag(this.$i18n.locale)
        }

        get language() {
            return AppModule.language
        }
        private handleSetLanguage(lang: string) {
            console.log("****************************************************")
            this.selectedFlag = this.selectedLanguageFlag(lang)
            this.$i18n.locale = lang
            AppModule.SetLanguage(lang)
            document.documentElement.lang = lang
            const title = this.$route.meta.title ? `${this.$t(`route.${this.$route.meta.title}`)} - ${settings.title}` : `${settings.title}`
            document.title = title
        }
    }
</script>
