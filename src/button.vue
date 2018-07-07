<template>
  <div>
    <button class="g-button" :class="iconPos">
      <svg class="icon">
        <use :xlink:href="`#i-${icon}`"></use>
      </svg>
      <div class="content">
        <slot></slot>
      </div>
    </button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    icon: String,
    iconPosition: String
  },
  computed: {
    iconPos: function () {
      return `icon-${this.iconPosition}`
    }
  }
}
</script>

<style scoped lang="scss">
.g-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 0 1em;
  height: var(--button-height);
  color: var(--color);
  font-size: var(--font-size);
  background-color: var(--button-bg);
  border-radius: var(--border-radius);
  border-color: var(--border-color);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > {
    .icon{order: 1};
    .content{order: 2};
  }
  &.icon-right{
    .icon{order: 2};
    .content{order: 1};
  }
}
</style>