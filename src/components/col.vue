<template>
  <div class="col" :class="">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
	export default {
		name: 'VVCol',
		props: {
			span: [Number, String]
		}
	}
</script>

<style lang="scss" scoped>
  $background-color: rgba(0, 160, 233, 0.7);
  $class_prefix: 'col_';
  .col {
    height: 100%;
    background: $background-color;
    width: 100%;
    border: 1px solid #ccc;
  }
</style>