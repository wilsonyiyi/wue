<template>
	<main class="content">
		<slot></slot>
	</main>
</template>

<script type="text/ecmascript-6">
export default {
	name: 'WContent'
};
</script>

<style scoped lang="scss">
.content {
	flex: 1;
}
</style>
