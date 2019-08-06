<template>
	<div class="toast" ref="toast">
		<slot v-if="!enableHtml"></slot>
		<div v-else v-html="this.$slots.default"></div>
		<template v-if="!closable">
			<div class="line" ref="line"></div>
			<span class="closeBtn" @click="closeBtnClick">{{closeText}}</span>
		</template>
	</div>
</template>
<script>
export default {
	name: 'WToast',
	props: {
		enableHtml: {
			type: Boolean,
			default: false
		},
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
		this.$nextTick(() => {
			this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`;
		});
	},
	methods: {
		close() {
			this.$el.remove();
			this.afterClose && this.afterClose(); // 组件销毁时触发
			this.$destroy();
		},
		closeBtnClick() {
			this.onClose && this.onClose();
			this.close();
		}
	}
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
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
	min-height: $toast-min-height;
	padding: 8px 16px;
	background: $toast-bg;
	border-radius: $toast-border-radius;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	.closeBtn {
		padding-left: 16px;
		flex-shrink: 0;
		line-height: 40px;
		cursor: pointer;
		user-select: none;
	}
	.line {
		border-left: 1px solid #666;
		margin-left: 16px;
	}
}
</style>
