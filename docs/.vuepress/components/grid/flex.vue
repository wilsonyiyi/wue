<template>
	<div class="demo">
		<p class="title">Align Top</p>
		<w-row justify="center" align="top" :style="{height: '120px'}">
			<w-col span="4">
				<span :style="{height: '100px', lineHeight: '100px'}">col-4</span>
			</w-col>
			<w-col span="4">
				<span>col-4</span>
			</w-col>
			<w-col span="4">
				<span :style="{height: '110px', lineHeight: '110px'}">col-4</span>
			</w-col>
			<w-col span="4">
				<span :style="{height: '70px', lineHeight: '70px'}">col-4</span>
			</w-col>
		</w-row>
		<p class="title">Align Center</p>
		<w-row justify="space-around" align="center" :style="{height: '120px'}">
			<w-col span="4">
				<span :style="{height: '100px', lineHeight: '100px'}">col-4</span>
			</w-col>
			<w-col span="4">
				<span>col-4</span>
			</w-col>
			<w-col span="4">
				<span :style="{height: '110px', lineHeight: '110px'}">col-4</span>
			</w-col>
			<w-col span="4">
				<span :style="{height: '70px', lineHeight: '70px'}">col-4</span>
			</w-col>
		</w-row>
		<p class="title">Align Bottom</p>
		<w-row justify="space-between" align="bottom" :style="{height: '120px'}">
			<w-col span="4">
				<span :style="{height: '100px', lineHeight: '100px'}">col-4</span>
			</w-col>
			<w-col span="4">
				<span>col-4</span>
			</w-col>
			<w-col span="4">
				<span :style="{height: '110px', lineHeight: '110px'}">col-4</span>
			</w-col>
			<w-col span="4">
				<span :style="{height: '70px', lineHeight: '70px'}">col-4</span>
			</w-col>
		</w-row>
	</div>
</template>
<script>
import WRow from '../../../../src/components/row';
import WCol from '../../../../src/components/col';
export default {
	name: 'GridFlex',
	components: { WRow, WCol }
};
</script>
<style lang="scss" scoped>
.demo {
	p.title {
		margin-top: 10px;
		color: #333;
		font-size: 14px;
	}
	.row {
		background: #f5f5f5;
		margin-top: 8px;
		padding: 5px 10px;
		.col {
			span {
				width: 100%;
				line-height: 50px;
				text-align: center;
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
