<template>
	<div>
		<div class="code-box-demo">
			<span class="title">{{title}}</span>
			<slot name="demo"></slot>
		</div>
		<div class="code-box-description">
			<slot name="desc"></slot>
		</div>
		<div class="code-box-actions">
			<slot name="code"></slot>
		</div>
	</div>
</template>
<script>
export default {
	name: 'CodeBox',
	props: {
		title: {
			type: String,
			required: true
		}
	}
};
</script>
<style lang="scss" scoped>
.code-box-demo {
	padding: 42px 24px 50px;
	color: rgba(0, 0, 0, 0.65);
	border-bottom: 1px solid #ebedf0;
	.title {
		color: #314659;
		font-weight: 500;
		font-size: 14px;
	}
}
.code-box-description {
	padding: 18px 24px 12px;
}
.code-box-actions {
	padding-top: 12px;
	text-align: center;
	border-top: 1px dashed #ebedf0;
	opacity: 0.7;
	-webkit-transition: opacity 0.3s;
	transition: opacity 0.3s;
}
</style>

