---
sidebarDepth: 0
---

# Layout 布局

## 代码演示

### 基本结构

<ClientOnly>
  <layout-basic />
</ClientOnly>

```vue
<template>
	<div class="container">
		<w-layout>
			<w-header>Header</w-header>
			<w-content>Content</w-content>
			<w-footer>Footer</w-footer>
		</w-layout>
		<w-layout>
			<w-header>Header</w-header>
			<w-layout>
				<w-sider>Sider</w-sider>
				<w-content>Content</w-content>
			</w-layout>
			<w-footer>Footer</w-footer>
		</w-layout>
		<w-layout>
			<w-header>Header</w-header>
			<w-layout>
				<w-content>Content</w-content>
				<w-sider>Sider</w-sider>
			</w-layout>
			<w-footer>Footer</w-footer>
		</w-layout>
		<w-layout>
			<w-sider>Sider</w-sider>
			<w-layout>
				<w-header>Header</w-header>
				<w-content>Content</w-content>
				<w-footer>Footer</w-footer>
			</w-layout>
		</w-layout>
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
```
