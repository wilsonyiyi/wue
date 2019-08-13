<template>
	<div class="wrap">
		<w-button @click="showMessage">一般使用</w-button>
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
			this.$toast('基础toast默认3s关闭', { duration: 100 });
		}
	}
};
</script>
