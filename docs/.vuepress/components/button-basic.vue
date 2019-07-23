<template>
	<div class="wrap">
		<w-button>普通按钮</w-button>
		<w-button icon="setting">带图标按钮</w-button>
		<w-button :disabled="true">禁用按钮</w-button>
	</div>
</template>

<script>
import WButton from '../../../src/components/button';
export default {
	components: { WButton }
};
</script>

<style lang="scss" scoped>
.wrap {
	padding: 10px;
}
</style>
