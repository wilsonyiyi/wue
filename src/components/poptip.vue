<template>
	<div ref="poptipRef">
		<div v-if="visible" ref="contentRef" class="content-wrap">
			<slot name="content"></slot>
		</div>
		<div ref="triggerRef" class="trigger-wrap" @click="onClick">
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
		onClickDocument({ target }) {
			const { poptipRef, contentRef, triggerRef } = this.$refs;
			if (poptipRef === target || contentRef.contains(target) || triggerRef.contains(target))
				return;
			this.close();
		},
		close() {
			this.visible = false;
			document.removeEventListener('click', this.onClickDocument);
		},
		open() {
			this.visible = true;
			this.$nextTick(() => {
				this.moveContentWrapToBody();
			});
			document.addEventListener('click', this.onClickDocument);
		},
		onClick(event) {
			// vue 2.6.10版本，元素被移除组件时，元素不会冒泡到原父元素
			if (this.visible === true) {
				this.close();
			} else {
				this.open();
			}
		},
		moveContentWrapToBody() {
			const { contentRef, triggerRef } = this.$refs;
			const { width, height, top, left } = triggerRef.getBoundingClientRect();
			contentRef.style.left = left + window.scrollX + 'px';
			contentRef.style.top = top + window.scrollY + 'px';
			document.body.appendChild(contentRef);
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
