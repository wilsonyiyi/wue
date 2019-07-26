---
sidebarDepth: 0
---

# Button 按钮

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 代码演示

<button-basic></button-basic>

```vue
<template>
	<div>
		<w-button>普通按钮</w-button>
		<w-button icon="setting">带图标(左边)</w-button>
		<w-button icon="setting" iconPosition="right">带图标(右边)</w-button>
		<w-button loading>带Loading按钮</w-button>
		<w-button :loading="loading" @click="setLoading">点击我</w-button>
		<w-button :disabled="true">禁用按钮</w-button>
		<w-button type="primary">Primary</w-button>
		<w-button type="danger">Danger</w-button>
		<w-button type="dashed">Dashed</w-button>
	</div>
</template>
<script>
import WButton from '../../../src/components/button';
export default {
	components: { WButton },
	data() {
		return {
			loading: false
		};
	},
	methods: {
		setLoading() {
			this.loading = !this.loading;
		}
	}
};
</script>
```

## API

按钮的属性说明如下：

| 属性         | 说明                                               | 类型          | 默认值  |
| ------------ | -------------------------------------------------- | ------------- | ------- |
| icon         | 设置按钮的图标类型                                 | string        | -       |
| iconPosition | 设置按钮的图标位置                                 | 'left'/'right | 'left'  |
| loading      | 设置按钮载入状态                                   | boolean       | false   |
| type         | 设置按钮类型，可选值为 `primary` `dashed` `danger` | string        | default |
