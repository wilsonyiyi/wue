<template>
  <div class="wrapper" :class="{error}">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly">
    <template v-if="!!error">
      <icon name="error" class="icon-error"></icon>
      <span class="text-error">{{error}}</span>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
  import Icon from './icon'
	export default {
		name: 'VVInput',
    components: {Icon},
    props: {
			value: {
				type: String
      },
      disabled: {
				type: Boolean,
        default: false
      },
      readonly: {
				type: Boolean,
        default: false
      },
      error: {
				type: String
      }
    },

	}
</script>

<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $red: #F1453d;
  $border-color-hover: #666;
  $font-size: 14px;
  $border-radius: 4px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $background-color-disabled: #f5f5f5;
  $color-disabled: rgba(0,0,0,0.25);
  $border-color-disabled: #d9d9d9;
  .wrapper{
    display: inline-flex;
    align-items: center;
    font-size: $font-size;
    >:not(:last-child){
      margin-right: .5em;
    }
    >input {
      height: $height;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      font-size: inherit;
      &:hover{
        border-color: $border-color-hover;
      }
      &:focus{
        box-shadow: inset 0 1px 3px $box-shadow-color;
        outline: none;
      }
      &[disabled]{
        color: $color-disabled;
        background-color: $background-color-disabled;
        border-color: $border-color-disabled;
        box-shadow: none;
        cursor: not-allowed;
      }
    }
    &.error{
      >input{
        border-color: $red;
      }
      .icon-error{
        fill: $red;
      }
      .text-error{
        color: $red;
      }
    }
  }
</style>