<template>
	<div class="wrap">
		<w-button class="item">普通按钮</w-button>
		<w-button icon="setting" class="item">带图标(左边)</w-button>
		<w-button icon="setting" iconPosition="right" class="item">带图标(右边)</w-button>
		<w-button loading class="item">带Loading按钮</w-button>
		<w-button :loading="loading" @click="setLoading" class="item">点击我</w-button>
		<w-button :disabled="true" class="item">禁用按钮</w-button>
		<w-button type="primary" class="item">Primary</w-button>
		<w-button type="danger" class="item">Danger</w-button>
		<w-button type="dashed" class="item">Dashed</w-button>
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
