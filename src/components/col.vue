<template>
	<div class="col" :class="colClass" :style="colStyle">
		<slot></slot>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
	name: 'WCol',
	props: {
		span: {
			type: [Number, String]
		},
		offset: {
			type: [Number, String]
		}
	},
	data() {
		return {
			gutter: 0
		};
	},
	computed: {
		colClass() {
			return [this.span && `col-${this.span}`, this.offset && `offset-${this.offset}`];
		},
		colStyle() {
			return this.gutter
				? {
						paddingLeft: this.gutter / 2 + 'px',
						paddingRight: this.gutter / 2 + 'px'
				  }
				: {};
		}
	}
};
</script>

<style lang="scss" scoped>
.col {
	height: 100%;
	width: 100%;
	display: inline-flex;
	align-items: center;
}
$class_prefix: 'col-';
@for $i from 1 through 24 {
	&.#{$class_prefix}#{$i} {
		width: $i/24 * 100%;
	}
}
$class_prefix: 'offset-';
@for $i from 1 through 24 {
	&.#{$class_prefix}#{$i} {
		margin-left: $i/24 * 100%;
	}
}
</style>
