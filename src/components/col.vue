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
			const getClasses = type => {
				return bootstrapsKeys.map(key => {
					const val = bootstraps[key];
					return val && type in val && `col-${type}-${key}-${val[type]}`;
				});
			};
			const bootstrapsSpan = getClasses('span');
			const bootstrapsOffset = getClasses('offset');

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
.col {
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

@media (max-width: 576px) {
	@for $i from 1 through 24 {
		&.#{$span_prefix}xs-#{$i} {
			width: $i/24 * 100%;
		}
	}
}
</style>
