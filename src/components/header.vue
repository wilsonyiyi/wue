<template>
	<header class="header">
		<slot></slot>
	</header>
</template>

<script type="text/ecmascript-6">
export default {
	name: 'WHeader'
};
</script>

<style scoped lang="scss">
.header {
	padding: 0 50px;
	height: 64px;
	line-height: 64px;
}
</style>
