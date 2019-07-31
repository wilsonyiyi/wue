<template>
	<div class="container">
		<div class="demo demo1">
			<w-layout>
				<w-header>Header</w-header>
				<w-content>Content</w-content>
				<w-footer>Footer</w-footer>
			</w-layout>
		</div>
		<div class="demo demo2">
			<w-layout>
				<w-header>Header</w-header>
				<w-layout>
					<w-sider>Sider</w-sider>
					<w-content>Content</w-content>
				</w-layout>
				<w-footer>Footer</w-footer>
			</w-layout>
		</div>
		<div class="demo demo2">
			<w-layout>
				<w-header>Header</w-header>
				<w-layout>
					<w-content>Content</w-content>
					<w-sider>Sider</w-sider>
				</w-layout>
				<w-footer>Footer</w-footer>
			</w-layout>
		</div>
		<div class="demo demo3">
			<w-layout>
				<w-sider>Sider</w-sider>
				<w-layout>
					<w-header>Header</w-header>
					<w-content>Content</w-content>
					<w-footer>Footer</w-footer>
				</w-layout>
			</w-layout>
		</div>
	</div>
</template>
<script>
import WLayout from '../../../../src/components/layout';
import WHeader from '../../../../src/components/header';
import WSider from '../../../../src/components/sider';
import WContent from '../../../../src/components/content';
import WFooter from '../../../../src/components/footer';
export default {
	components: {
		WLayout,
		WHeader,
		WSider,
		WContent,
		WFooter
	}
};
</script>
<style lang="scss" scoped>
.container {
	text-align: center;
	color: #ffffff;
	font-weight: 400;
	.demo {
		margin-bottom: 48px;
	}
	.header {
		background: #7dbcea;
	}
	.footer {
		color: #ffffff;
		line-height: 1.5;
		background: #7dbcea;
	}
	.content {
		height: 120px;
		line-height: 120px;
		background: rgba(16, 142, 233, 1);
		margin: 0; // hack: conflict with vuepress content class
		padding: 0; // hack: conflict with vuepress content class
	}
	.sider {
		line-height: 120px;
		background: #3ba0e9;
	}
	.demo1 {
		margin-top: 20px;
	}
	.demo2 {
		.sider {
			flex: 0 0 200px;
		}
	}
	.demo3 {
		.sider {
			flex: 0 0 200px;
		}
	}
}
</style>
