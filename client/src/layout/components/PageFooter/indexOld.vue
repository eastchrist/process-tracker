<template>
        <v-footer class="footer">
            <v-card flat tile width="100%" class="red lighten-1 text-center">
                <v-card-text class="footer">
                    Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text class="white--text">
                    {{ new Date().getFullYear() }} — <strong>Process &&& Control 2IA</strong>
                </v-card-text>
            </v-card>
        </v-footer>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'

    @Component({
        name: 'PageFooter',
        components: {}
    })
    export default class extends Vue {
        // TODO
        private icons = [
            'user-secret',
            'spinner',
            'user-secret',
            'spinner',
        ];
        private icons2 = [
            'fab fa-facebook',
            'fab fa-twitter',
            'fab fa-google-plus',
            'fab fa-linkedin',
            'fab fa-instagram'
        ];


    }
</script>

<style lang="scss" scoped>
    .footer {
        height: $footerHeight;
        background: $footerBackgroundColor;
    }
</style>
