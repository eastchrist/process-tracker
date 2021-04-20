<template>
  <div :class="[{'is-active': isActive}]" @click="toggleClick">
    <v-app-bar-nav-icon name="hamburger" width="20" height="20"></v-app-bar-nav-icon>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'Hamburger'
})
export default class extends Vue {
  @Prop({ default: false }) private isActive!: boolean

  private toggleClick() {
    this.$emit('toggle-click')
  }
}
</script>

<style lang="scss" scoped>
.svg-icon {
  vertical-align: middle;
}

.is-active {
  transform: rotate(180deg);
}
</style>
