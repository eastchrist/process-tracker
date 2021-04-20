<template>
    <div class="Entreprise">
        <h2>{{ $t('screen.entreprise') }}</h2>
    </div>
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

