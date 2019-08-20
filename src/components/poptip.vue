<template>
	<div @click="onClick">
		<div v-if="visible" ref="contentRef" class="content-wrap">
			<slot name="content"></slot>
		</div>
		<div ref="triggerRef" class="trigger-wrap">
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default {
	name: 'WPoptip',
	data() {
		return {
			visible: false
		};
	},
	methods: {
		onClick(event) {
			// vue 2.6.10版本，元素被移除组件时，元素不会冒泡到原父元素
			//!bug click关闭时需要移除document上的事件绑定
			this.visible = !this.visible;
			if (this.visible) {
				this.$nextTick(() => {
					this.moveContentWrap();
					this.setVisibleWithDocument();
				});
			}
		},
		moveContentWrap() {
			const { contentRef, triggerRef } = this.$refs;
			const { width, height, top, left } = triggerRef.getBoundingClientRect();
			contentRef.style.left = left + window.scrollX + 'px';
			contentRef.style.top = top + window.scrollY + 'px';
			document.body.appendChild(contentRef);
		},
		setVisibleWithDocument() {
			const { contentRef, triggerRef } = this.$refs;
			const eventHandler = ({ target }) => {
				if (triggerRef.contains(target) || contentRef.contains(target)) return;
				this.visible = false;
				document.removeEventListener('click', eventHandler);
			};
			document.addEventListener('click', eventHandler);
		}
	}
};
</script>
<style lang="scss" scoped>
.content-wrap {
	position: absolute;
	border: 1px solid blue;
	padding: 10px;
	transform: translateY(-100%);
}
.trigger-wrap {
	border: 1px solid pink;
	padding: 10px;
}
</style>
