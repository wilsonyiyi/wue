<template>
  <svg v-if="name" class="w-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script type="text/ecmascript-6">
  export default {
  	name: 'WIcon',
    props: {
  		name: {
  			type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  .w-icon{
    width: 1em;
    height: 1em;
  }
</style>