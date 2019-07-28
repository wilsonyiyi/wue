---
sidebarDepth: 0
---

# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 代码演示

<ClientOnly>
  <input-basic />
</ClientOnly>

```vue
<template>
	<div class="wrap">
		<w-input value="张三" class="item"></w-input>
		<w-input value="李四" readonly class="item"></w-input>
		<w-input value="王五" disabled class="item"></w-input>
		<w-input value="天王" @change="inputChange" class="item"></w-input>
		<w-input value="哈哈" error="出错啦！！！" class="item"></w-input>
	</div>
</template>
<script>
import WInput from '../../../src/components/input';
export default {
	components: { WInput },
	methods: {
		inputChange(e) {
			console.log(e.target.value);
		}
	}
};
</script>
```

## API

按钮的属性说明如下：

| 属性     | 说明                       | 类型        | 默认值 |
| -------- | -------------------------- | ----------- | ------ |
| value    | 输入框内容                 | string      | -      |
| readonly | 是否只读状态，默认为 false | boolean     | false  |
| disabled | 是否禁用状态，默认为 false | boolean     | false  |
| change   | 输入框内容变化时的回调     | function(e) |        |
| error    | 错误提示信息               | string      |        |
