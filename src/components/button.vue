<template>
	<button
		class="w-button"
		:class="{[`icon-${iconPosition}`]: true, [type]: true}"
		@click="$emit('click')"
	>
		<w-icon class="icon" v-if="!loading" :name="icon"></w-icon>
		<w-icon class="icon loading" name="loading" v-if="loading"></w-icon>
		<span class="text">
			<slot></slot>
		</span>
	</button>
</template>

<script type="text/ecmascript-6">
import WIcon from './icon';
export default {
	name: 'WButton',
	components: { WIcon },
	props: {
		icon: {
			type: String
		},
		loading: {
			type: Boolean,
			default: false
		},
		iconPosition: {
			type: String,
			default: 'left',
			validator(value) {
				return value === 'left' || value === 'right';
			}
		},
		type: {
			type: String,
			default: 'default',
			validator(value) {
				return ['primary', 'danger', 'dashed'].includes(value);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
$button-height: 32px;
$font-size: 14px;
$color: #333;
$color-white: #fff;
$color-hover-dashed: #40a9ff;
$color-active-dashed: #096dd9;
$border-radius: 4px;

$button-bg: white;
$button-bg-primary: #1890ff;
$button-bg-danger: #ff4d4f;
$button-bg-hover-primary: #40a9ff;
$button-bg-hover-danger: #ff7875;
$button-bg-active: #eee;
$button-bg-active-primary: #096dd9;
$button-bg-active-danger: #d9363e;

$border-color: #999;
$border-color-primary: #1890ff;
$border-color-danger: #ff4d4f;
$border-color-dashed: #999;
$border-color-hover: #666;
$border-color-hover-primary: #40a9ff;
$border-color-hover-danger: #ff7875;
$border-color-hover-dashed: #40a9ff;
$border-color-active-primary: #096dd9;
$border-color-active-danger: #d9363e;
$border-color-active-dashed: #096dd9;
.w-button {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	vertical-align: middle;
	height: $button-height;
	font-size: $font-size;
	padding: 0 1em;
	border: 1px solid $border-color;
	border-radius: $border-radius;
	background: $button-bg;
	&.primary {
		color: $color-white;
		background: $button-bg-primary;
		border: 1px solid $border-color-primary;
		&:hover {
			background: $button-bg-hover-primary;
			border: 1px solid $border-color-hover-primary;
		}
		&:active {
			background: $button-bg-active-primary;
			border: 1px solid $border-color-active-primary;
		}
	}
	&.danger {
		color: $color-white;
		background: $button-bg-danger;
		border: 1px solid $border-color-danger;
		&:hover {
			background: $button-bg-hover-danger;
			border: 1px solid $border-color-hover-danger;
		}
		&:active {
			background: $button-bg-active-danger;
			border: 1px solid $border-color-active-danger;
		}
	}
	&.dashed {
		border: 1px dashed $border-color-dashed;
		&:hover {
			color: $color-hover-dashed;
			border-color: $border-color-hover-dashed;
		}
		&:active {
			color: $color-active-dashed;
			background: $button-bg;
			border-color: $border-color-active-dashed;
		}
	}
	&.icon-left {
		flex-direction: row;
		.icon {
			margin-right: 0.1em;
		}
	}
	&.icon-right {
		flex-direction: row-reverse;
		.icon {
			margin-left: 0.1em;
		}
	}
	.loading {
		animation: spin 1.2s infinite linear;
		margin: 0;
	}
	&:active {
		background: $button-bg-active;
	}
	&:hover {
		border-color: $border-color-hover;
	}
	&:focus {
		outline: none;
	}
	.text {
		font-weight: 400;
		white-space: nowrap;
		user-select: none;
		cursor: pointer;
	}
}
@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
