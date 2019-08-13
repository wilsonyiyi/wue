<template>
	<div>
		<h3>基础功能</h3>
		<w-button @click="showMessage">显示Toast</w-button>
		<w-button @click="showMessageWithDuration">自定义显示10s后关闭</w-button>
		<w-button @click="showMessageWithCloseBtn">手动关闭</w-button>
		<w-button @click="showMessageWithVNode">支持VNode</w-button>
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
		showMessage() {
			this.$toast('默认3s后自动关闭');
		},
		showMessageWithDuration() {
			this.$toast('将在10s后自动关闭', { duration: 10 });
		},
		showMessageWithCloseBtn() {
			this.$toast('只能手动关闭', { closable: false });
		},
		showMessageWithVNode() {
			this.$toast('<strong>我被加粗了，<i>我是倾斜的</i></strong>', {
				enableHtml: true,
				closable: false
			});
		}
	}
};
</script>
