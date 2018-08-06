<template>
  <svg v-if="name" class="g-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script type="text/ecmascript-6">
  export default {
  	namespace: 'components-icon',
    props: {
  		name: {
  			type: String
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .g-icon{
    width: 1em;
    height: 1em;
  }
</style>