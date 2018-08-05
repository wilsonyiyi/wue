<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <slot></slot>
  </button>
</template>

<script type="text/ecmascript-6">
  export default  {
  	props: {
  		icon: '',
      iconPosition: {
  			type: String,
        default: 'left'
      }
    }
  }
</script>

<style lang="scss">
  .g-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    height: var(--button-height);
    font-size: var(--font-size);
    padding: 0 1em;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background: var(--button-bg);
    &.icon-left{
      flex-direction: row;
      .icon{
        margin-right: .1em;
      }
    }
    &.icon-right{
      flex-direction: row-reverse;
      .icon{
        margin-left: .1em;
      }
    }
    &:active {
      background: var(--button-active-bg);
    }
    &:hover {
      border-color: var(--border-hover-color);
    }
    &:focus {
      outline: none;
    }
  }
</style>