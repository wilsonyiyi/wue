<template>
	<div class="col" :class="colClass" :style="colStyle">
		<slot></slot>
	</div>
</template>

<script type="text/ecmascript-6">
const validator = value => {
	const keys = Object.keys(value);
	let valid = true;
	keys.forEach(key => {
		if (!['span', 'offset'].includes(key)) {
			valid = false;
		}
	});
	return valid;
};
export default {
	name: 'WCol',
	props: {
		span: {
			type: [Number, String]
		},
		offset: {
			type: [Number, String]
		},
		xs: {
			type: Object,
			validator
		},
		sm: {
			type: Object,
			validator
		},
		md: {
			type: Object,
			validator
		},
		lg: {
			type: Object,
			validator
		},
		xl: {
			type: Object,
			validator
		},
		xxl: {
			type: Object,
			validator
		}
	},
	data() {
		return {
			gutter: 0
		};
	},
	computed: {
		colClass() {
			const { span, offset, xs, sm, md, lg, xl, xxl } = this;
			const bootstraps = { xs, sm, md, lg, xl, xxl };
			const bootstrapsKeys = Object.keys(bootstraps);
			const createClasses = type => {
				return bootstrapsKeys.map(key => {
					const val = bootstraps[key];
					return val && type in val && `col-${type}-${key}-${val[type]}`;
				});
			};
			const bootstrapsSpan = createClasses('span');
			const bootstrapsOffset = createClasses('offset');

			return [
				span && `col-${span}`,
				offset && `offset-${offset}`,
				...bootstrapsSpan,
				...bootstrapsOffset
			];
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
$span_prefix: 'col-span-';
$offset_prefix: 'col-offset-';
@mixin getBootstrapBlock($type) {
	$collection: ($span_prefix, $offset_prefix);
	@each $prefix in $collection {
		@for $i from 1 through 24 {
			&.#{$prefix}#{$type}-#{$i} {
				@if $prefix == $span_prefix {
					width: $i/24 * 100%;
				} @else {
					margin-left: $i/24 * 100%;
				}
			}
		}
	}
}
@mixin calcBootstrap($type) {
	@if $type == 'xs' {
		@media (max-width: 575px) {
			@include getBootstrapBlock($type);
		}
	}
	@if $type == 'sm' {
		@media (min-width: 576px) {
			@include getBootstrapBlock($type);
		}
	}
	@if $type == 'md' {
		@media (min-width: 768px) {
			@include getBootstrapBlock($type);
		}
	}
	@if $type == 'lg' {
		@media (min-width: 992px) {
			@include getBootstrapBlock($type);
		}
	}
	@if $type == 'xl' {
		@media (min-width: 1200px) {
			@include getBootstrapBlock($type);
		}
	}
	@if $type == 'xxl' {
		@media (min-width: 1600px) {
			@include getBootstrapBlock($type);
		}
	}
}
.col {
	display: inline-flex;
	align-items: center;
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
	@include calcBootstrap('xs');
	@include calcBootstrap('sm');
	@include calcBootstrap('md');
	@include calcBootstrap('lg');
	@include calcBootstrap('xl');
	@include calcBootstrap('xxl');
}
</style>
