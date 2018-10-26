<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  	name: 'VVRow',
    props: {
      gutter: {
      	type: [Number, String]
      }
    },
    computed: {
  		rowStyle() {
			  console.log(this.gutter);
			  return this.gutter ? {
  				marginLeft: -`${this.gutter/2}px`,
          marginRight: -`${this.gutter/2}px`
  			} : {}
      }
    },
    mounted() {
	    this.$children.forEach(vm => {
		    console.log(vm);
		    vm.gutter = this.gutter
	    })
    }
  }
</script>

<style lang="scss" scoped>
  .row{
    display: flex;
    height: 50px;
  }
</style>