<template>
	<footer class="footer">
		<slot></slot>
	</footer>
</template>

<script type="text/ecmascript-6">
export default {
	name: 'WFooter'
};
</script>

<style scoped lang="scss">
.footer {
	padding: 24px 50px;
	color: rgba(0, 0, 0, 0.65);
	font-size: 14px;
	background: #f0f2f5;
}
</style>
