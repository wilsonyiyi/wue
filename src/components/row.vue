<template>
	<div class="row" :style="rowStyle">
		<slot></slot>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
	name: 'WRow',
	props: {
		gutter: {
			type: [Number, String]
		}
	},
	computed: {
		rowStyle() {
			let { gutter } = this;
			return gutter
				? {
						marginLeft: `-${gutter / 2}px`,
						marginRight: `-${gutter / 2}px`
				  }
				: {};
		}
	},
	mounted() {
		this.$children.forEach(vm => {
			vm.gutter = this.gutter;
		});
	}
};
</script>

<style lang="scss" scoped>
.row {
	display: flex;
	height: 50px;
}
</style>
