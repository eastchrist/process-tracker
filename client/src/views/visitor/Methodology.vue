<template>
    <section class="visitorMain">
        <!-- Elements -->
        <div class="row">
            <div class="col-6 col-12-medium">
                            <h2>{{ $t('plaquette.page.page2.left.titre.titre1') }}</h2>
                            <p>{{ $t('plaquette.page.page2.left.texte.texte01') }}</p>
                            <div>
                                <ul>
                                    <li>{{ $t('plaquette.page.page2.left.list.list01.item01') }}</li>
                                    <li>{{ $t('plaquette.page.page2.left.list.list01.item02') }}</li>
                                </ul>
                            </div>
                            <p>{{ $t('plaquette.page.page2.left.texte.texte02') }}</p>
                            <p>{{ $t('plaquette.page.page2.left.texte.texte03') }}</p>
                            <div>
                                <ul>
                                    <li>{{ $t('plaquette.page.page2.left.list.list02.item01') }}</li>
                                    <li>{{ $t('plaquette.page.page2.left.list.list02.item02') }}</li>
                                </ul>
                            </div>
                            <p>{{ $t('plaquette.page.page2.left.texte.texte04') }}</p>
                            <div>
                                <ul>
                                    <li>{{ $t('plaquette.page.page2.left.list.list03.item01') }}</li>
                                </ul>
                            </div>
                        </div>
            <div class="col-6 col-12-medium">
                            <p>{{ $t('plaquette.page.page2.right.texte.texte01') }}</p>
                            <p>{{ $t('plaquette.page.page2.right.texte.texte02') }}</p>
                            <p>{{ $t('plaquette.page.page2.right.texte.texte03') }}</p>
                            <div>
                                <ul>
                                    <li>{{ $t('plaquette.page.page2.right.list.list01.item01') }}</li>
                                </ul>
                            </div>
                            <p>{{ $t('plaquette.page.page2.right.texte.texte04') }}</p>
                            <p>{{ $t('plaquette.page.page2.right.texte.texte05') }}</p>
                        </div>
        </div>
    </section>
</template>


<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: {
        },
    })
    export default class Methodology extends Vue {}
</script>

