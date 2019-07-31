<template>
	<div class="demo">
		<w-row>
			<w-col :xs="{span:24}" :sm="{span:4}" :md="{span:6}" :lg="{span: 8}" :xl="{span:10}">
				<span>Col</span>
			</w-col>
			<w-col :xs="{span:24}" :sm="{span:16}" :md="{span:12}" :lg="{span: 8}" :xl="{span:4}">
				<span>Col</span>
			</w-col>
			<w-col :xs="{span:24}" :sm="{span:4}" :md="{span:6}" :lg="{span: 8}" :xl="{span:10}">
				<span>Col</span>
			</w-col>
		</w-row>
	</div>
</template>
<script>
import WRow from '../../../../src/components/row';
import WCol from '../../../../src/components/col';
export default {
	name: 'GridBootstrap',
	components: { WRow, WCol }
};
</script>
<style lang="scss" scoped>
.demo {
	.row {
		background: #f5f5f5;
		margin-top: 8px;
		padding: 5px 10px;
	}
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
</style>
