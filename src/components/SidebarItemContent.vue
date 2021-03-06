<template>
  <component :is="tag" :class="classes">
    <div v-if="icon" class="icon-container">
      <s-icon :name="icon" size="28" />
    </div>
    <span>{{ title }}</span>
  </component>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator'

import TranslationMixin from './mixins/TranslationMixin'

@Component
export default class SidebarItemContent extends Mixins(TranslationMixin) {
  @Prop({ default: '', type: String }) readonly icon!: string
  @Prop({ default: '', type: String }) readonly title!: string
  @Prop({ default: 'div', type: String }) readonly tag!: string

  get classes (): Array<string> {
    const base = 'sidebar-item-content'
    const classes = [base]

    if (this.tag === 'a') {
      classes.push(`${base}--link`)
    }

    return classes
  }
}
</script>

<style lang="scss" scoped>
$icon-size: 42px;

.sidebar-item-content {
  display: flex;

  &--link {
    &, &:hover, &:focus, &:visited {
      text-decoration: none;
      color: inherit;
    }
  }
}

.icon-container {
  display: flex;
  margin-right: $inner-spacing-small;
  padding-left: 1px; // because of inset shadow
  width: $icon-size;
  height: $icon-size;
  border-radius: 50%;
  background-color: var(--s-color-utility-surface);
  box-shadow: 1px 1px 2px #FFFFFF, inset 1px 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.125s ease-in-out;
  > i {
    margin: auto;
  }
}
</style>
