<template>
	<div class="wrap">
		<w-input value="张三" class="item"></w-input>
		<w-input value="李四" readonly class="item"></w-input>
		<w-input value="王五" disabled class="item"></w-input>
		<w-input value="天王" @change="inputChange" class="item"></w-input>
		<w-input value="哈哈" error="出错啦！！！" class="item"></w-input>
	</div>
</template>
<script>
import WInput from '../../../src/components/input';
export default {
	components: { WInput },
	methods: {
		inputChange(e) {
			console.log(e.target.value);
		}
	}
};
</script>
