<template>
	<div class="demo">
		<w-row>
			<w-col span="12">
				<span>col-12</span>
			</w-col>
			<w-col span="12">
				<span>col-12</span>
			</w-col>
		</w-row>
		<w-row>
			<w-col span="8">
				<span>col-8</span>
			</w-col>
			<w-col span="8">
				<span>col-8</span>
			</w-col>
			<w-col span="8">
				<span>col-8</span>
			</w-col>
		</w-row>
		<w-row>
			<w-col span="6">
				<span>col-6</span>
			</w-col>
			<w-col span="6">
				<span>col-6</span>
			</w-col>
			<w-col span="6">
				<span>col-6</span>
			</w-col>
			<w-col span="6">
				<span>col-6</span>
			</w-col>
		</w-row>
	</div>
</template>
<script>
import WRow from '../../../src/components/row';
import WCol from '../../../src/components/col';
export default {
	name: 'GridGutter',
	components: { WRow, WCol }
};
</script>
<style lang="scss" scoped>
.demo {
	.row {
		margin-top: 8px;
		.col {
			span {
				width: 100%;
				line-height: 50px;
				text-align: center !important;
				font-size: 14px;
				color: #fff;
			}
			&:nth-child(odd) {
				span {
					background: rgba(0, 160, 233, 0.7);
				}
			}
			&:nth-child(even) {
				span {
					background: #00a0e9;
				}
			}
		}
	}
}
</style>
