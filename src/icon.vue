<template>
  <svg v-if="name" class="icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script type="text/ecmascript-6">
export default {
  props: ['name']
}
</script>

<style scoped lang="scss">
.icon{
  width: 1em;
  height: 1em;
}
</style>