<template>
  <div class="w-button-group">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .w-button-group{
    display: inline-flex;
    vertical-align: middle;
    .w-button{
      border-radius: 0;
      &:not(:first-child) {
        margin-left: -1px
      }
      &:first-of-type{
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-of-type{
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      &:hover{
        position relative;
        z-index: 1;
      }
    }
  }
</style>