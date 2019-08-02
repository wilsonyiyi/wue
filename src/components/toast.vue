<template>
	<div class="toast">
		<slot></slot>
		<span class="closeBtn" v-if="!closable">{{closeText}}</span>
	</div>
</template>
<script>
export default {
	name: 'WToast',
	props: {
		closable: {
			type: Boolean,
			default: true
		},
		duration: {
			type: Number,
			default: 3
		},
		afterClose: {
			type: Function
		},
		closeText: {
			type: String,
			default: '关闭'
		},
		onClose: {
			type: Function
		}
	},
	mounted() {
		if (this.closable) {
			setTimeout(() => {
				this.close();
			}, this.duration * 1000);
		}
	},
	methods: {
		close() {
			this.$el.remove();
			this.afterClose && this.afterClose(); // 组件销毁时触发
			this.$destroy();
		}
	}
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.7);
$toast-border-radius: 5px;
.toast {
	display: flex;
	align-items: center;
	position: absolute;
	top: 10px;
	left: 50%;
	transform: translateX(-50%);
	color: #ffffff;
	height: $toast-height;
	padding: 0px 16px;
	background: $toast-bg;
	border-radius: $toast-border-radius;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	.closeBtn {
		font-size: 12px;
	}
}
</style>
