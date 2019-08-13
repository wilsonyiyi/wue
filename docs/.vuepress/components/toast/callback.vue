<template>
	<div>
		<h3>回调函数</h3>
		<w-button @click="showCallback">组件关闭时的回调</w-button>
		<w-button @click="showOnClose">手动关闭时触发的函数</w-button>
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
		showCallback() {
			this.$toast('默认3s后自动关闭', {
				afterClose: () => window.alert('toast组件已经关闭了')
			});
		},
		showOnClose() {
			this.$toast('只能手动关闭', {
				closable: false,
				onClose: () => window.alert('你点击了关闭按钮')
			});
		}
	}
};
</script>
