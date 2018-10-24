<template>
  <button class="w-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <w-icon class="icon" v-if="!loading" :name="icon"></w-icon>
    <w-icon class="icon loading" name="loading" v-if="loading"></w-icon>
    <slot></slot>
  </button>
</template>

<script type="text/ecmascript-6">
  import WIcon from './icon'
  export default  {
  	name: 'VVButton',
  	components: {WIcon},
  	props: {
  		icon: {},
      loading: {
  			type: Boolean,
        default: false
      },
      iconPosition: {
  			type: String,
        default: 'left',
        validator(value) {
        	return value === 'left' || value === 'right'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .w-button {
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
    .loading {
      animation: spin 1.2s infinite linear;
      margin: 0;
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
  @keyframes spin {
    0% { transform: rotate(0deg)}
    100% { transform: rotate(360deg)}
  }
</style>