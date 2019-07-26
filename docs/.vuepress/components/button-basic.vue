<template>
	<div class="wrap">
		<w-button>普通按钮</w-button>
		<w-button icon="setting">带图标(左边)</w-button>
		<w-button icon="setting" iconPosition="right">带图标(右边)</w-button>
		<w-button loading>带Loading按钮</w-button>
		<w-button :loading="loading" @click="setLoading">点击我</w-button>
		<w-button :disabled="true">禁用按钮</w-button>
		<w-button type="primary">Primary</w-button>
		<w-button type="danger">Danger</w-button>
		<w-button type="dashed">Dashed</w-button>
	</div>
</template>

<script>
import WButton from '../../../src/components/button';
export default {
	components: { WButton },
	data() {
		return {
			loading: false
		};
	},
	methods: {
		setLoading() {
			this.loading = !this.loading;
		}
	}
};
</script>

<style lang="scss" scoped>
.wrap {
	padding: 10px;
	button {
		margin-right: 8px;
		margin-bottom: 12px;
	}
}
</style>
