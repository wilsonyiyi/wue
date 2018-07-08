<template>
  <button class="g-button" :class="iconPos" @click="$emit('click')">
    <g-icon v-if="!loading" :name="icon"></g-icon>
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    icon: String,
    iconPosition: {
      type: String,
      default: 'left',
      validator: function (value) {
        return value === 'left' || value === 'right'
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconPos: function () {
      return `icon-${this.iconPosition}`
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes spin {
  0% {transform: rotate(0deg)};
  100% {transform: rotate(360deg)};
}
.g-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
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
    .icon{order: 1; margin-right: 0.1em;};
    .content{order: 2};
  }
  &.icon-right{
    .icon{order: 2; margin-right: 0; margin-left: 0.1em;};
    .content{order: 1};
  }
  .loading{
    animation: spin 2.5s infinite linear;
  }
}
</style>