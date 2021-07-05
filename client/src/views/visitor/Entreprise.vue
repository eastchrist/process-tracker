<template>
    <section id="sectionMain" class="section-bg wow fadeInUp">
        <div class="inner">
            <div class="content">
                <!-- Elements -->
                <div class="row">
                    <div class="col-6 col-12-medium">
                        <h2>{{ $t('plaquette.page.page1.left.titre.titre1') }}</h2>
                        <p>{{ $t('plaquette.page.page1.left.texte.texte01') }}</p>
                        <div>
                            <ul>
                                <li>{{ $t('plaquette.page.page1.left.list.list01.item01') }}</li>
                                <li>{{ $t('plaquette.page.page1.left.list.list01.item02') }}</li>
                                <li>{{ $t('plaquette.page.page1.left.list.list01.item03') }}</li>
                                <li>{{ $t('plaquette.page.page1.left.list.list01.item04') }}</li>
                                <li>{{ $t('plaquette.page.page1.left.list.list01.item05') }}</li>
                                <li>{{ $t('plaquette.page.page1.left.list.list01.item06') }}</li>
                            </ul>
                        </div>
                        <p>{{ $t('plaquette.page.page1.left.texte.texte02') }}</p>
                        <p>{{ $t('plaquette.page.page1.left.texte.texte03') }}</p>
                    </div>
                    <div class="col-6 col-12-medium">
                        <h2>{{ $t('plaquette.page.page1.right.titre.titre1') }}</h2>
                        <div>
                            <ul>
                                <li>{{ $t('plaquette.page.page1.right.list.list01.item01') }}</li>
                                <li>{{ $t('plaquette.page.page1.right.list.list01.item02') }}</li>
                                <li>{{ $t('plaquette.page.page1.right.list.list01.item03') }}</li>
                                <li>{{ $t('plaquette.page.page1.right.list.list01.item04') }}</li>
                                <li>{{ $t('plaquette.page.page1.right.list.list01.item05') }}</li>
                                <li>{{ $t('plaquette.page.page1.right.list.list01.item06') }}</li>
                                <li>{{ $t('plaquette.page.page1.right.list.list01.item07') }}</li>
                            </ul>
                        </div>
                        <p>{{ $t('plaquette.page.page1.right.texte.texte01') }}</p>
                        <h2>{{ $t('plaquette.page.page1.right.titre.titre2') }}</h2>
                        <div>
                            <ul>
                                <li>{{ $t('plaquette.page.page1.right.list.list02.item01') }}</li>
                                <li>{{ $t('plaquette.page.page1.right.list.list02.item02') }}</li>
                                <li>{{ $t('plaquette.page.page1.right.list.list02.item03') }}</li>
                                <li>{{ $t('plaquette.page.page1.right.list.list02.item04') }}</li>
                                <li>{{ $t('plaquette.page.page1.right.list.list02.item05') }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    @Component({
        name: 'Entreprise',
        components: {
        },
    })
    export default class Entreprise extends Vue {}
</script>

<style lang="scss" scoped>
    #sectionMain {
        padding: 60px 60px 60px 60px;
        background: $communBackgroundColor;

    }
    h2 {
        padding: 60px 60px 60px 60px;
        background: blue;
    }
    p {
        margin: 0;
        padding: 10px;
        background: green;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 10px;
        background: red;
    }
</style>
