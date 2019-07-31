<template>
	<div class="row" :style="rowStyle">
		<slot></slot>
	</div>
</template>

<script type="text/ecmascript-6">
const alignItemsMap = {
	top: 'flex-start',
	middle: 'center',
	bottom: 'flex-end'
};
export default {
	name: 'WRow',
	props: {
		gutter: {
			type: [Number, String]
		},
		align: {
			type: String,
			validator: value => {
				return ['top', 'middle', 'bottom'].includes(value);
			}
		},
		justify: {
			type: String,
			validator: value => {
				return ['start', 'end', 'center', 'space-around', 'space-between'].includes(value);
			}
		}
	},
	computed: {
		rowStyle() {
			let { gutter, align, justify } = this;
			const rowStyle = {};
			const gutterStyle = gutter
				? {
						marginLeft: `-${gutter / 2}px`,
						marginRight: `-${gutter / 2}px`
				  }
				: {};
			const alignStyle = align ? { alignItems: alignItemsMap[align] } : {};
			const justifyStyle = justify ? { justifyContent: justify } : {};
			Object.assign(rowStyle, gutterStyle, alignStyle, justifyStyle);
			return rowStyle;
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
	flex-wrap: wrap;
}
</style>
