<template>
	<div>
		<h3>不同位置显示</h3>
		<w-button @click="showTop">顶部显示</w-button>
		<w-button @click="showCenter">中间显示</w-button>
		<w-button @click="showBottom">底部显示</w-button>
	</div>
</template>

<script>
import Vue from 'vue';
import plugin from '../../../../src/plugin';
import WButton from '../../../../src/components/button';
Vue.use(plugin);
export default {
	components: { WButton },
	methods: {
		showTop() {
			this.$toast('我出现在了顶部', { position: 'top' });
		},
		showCenter() {
			this.$toast('我出现在了中间', { position: 'center' });
		},
		showBottom() {
			this.$toast('我出现在了底部', { position: 'bottom' });
		}
	}
};
</script>
