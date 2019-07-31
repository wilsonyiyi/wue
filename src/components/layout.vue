<template>
	<div class="layout" :class="layoutSider">
		<slot></slot>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
	name: 'WLayout',
	data() {
		return {
			layoutSider: ''
		};
	},
	mounted() {
		this.$nextTick(() => {
			const hasSiderChildren = this.$children.some(
				children => children.$options.name === 'WSider'
			);
			if (hasSiderChildren) {
				this.layoutSider = 'layout-has-sider';
			}
		});
	}
};
</script>

<style scoped lang="scss">
.layout {
	display: flex;
	flex-direction: column;
	flex: 1;
	&.layout-has-sider {
		flex-direction: row;
	}
}
</style>
