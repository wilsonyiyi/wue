---
sidebarDepth: 0
---

# Toast 提示框

用于操作后的提示

## 何时使用

需要提醒用户操作结果时，或者通知用户时都可以使用

## 代码演示

<ClientOnly>
  <toast-basic />
</ClientOnly>

```vue
<template>
	<div>
		<h3>基础功能</h3>
		<w-button @click="showMessage">显示Toast</w-button>
		<w-button @click="showMessageWithDuration">自定义显示10s后关闭</w-button>
		<w-button @click="showMessageWithCloseBtn">手动关闭</w-button>
		<w-button @click="showMessageWithVNode">支持VNode</w-button>
	</div>
</template>

<script>
import WButton from '../../../../src/components/button';
export default {
	components: { WButton },
	methods: {
		showMessage() {
			this.$toast('默认3s后自动关闭');
		},
		showMessageWithDuration() {
			this.$toast('将在10s后自动关闭', { duration: 10 });
		},
		showMessageWithCloseBtn() {
			this.$toast('只能手动关闭', { closable: false });
		},
		showMessageWithVNode() {
			this.$toast('<strong>我被加粗了，<i>我是倾斜的</i></strong>', {
				enableHtml: true,
				closable: false
			});
		}
	}
};
</script>
```

<ClientOnly>
  <toast-position />
</ClientOnly>

```vue
<template>
	<div>
		<h3>不同位置显示</h3>
		<w-button @click="showTop">顶部显示</w-button>
		<w-button @click="showCenter">中间显示</w-button>
		<w-button @click="showBottom">底部显示</w-button>
	</div>
</template>

<script>
import WButton from '../../../../src/components/button';
export default {
	components: { WButton },
	methods: {
		showTop() {
			this.$toast('我出现在了顶部', { position: 'top' });
		},
		showCenter() {
			this.$toast('我出现在了中间', { position: 'center' });
		},
		showBottom() {
			this.$toast('我出现在了底部', { position: 'bottom' });
		}
	}
};
</script>
```

<ClientOnly>
  <toast-callback />
</ClientOnly>

```vue
<template>
	<div>
		<h3>回调函数</h3>
		<w-button @click="showCallback">组件关闭时的回调</w-button>
		<w-button @click="showOnClose">手动关闭时触发的函数</w-button>
	</div>
</template>

<script>
import WButton from '../../../../src/components/button';
export default { v'vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
	components: { WButton },
	methods: {
		showCallback() {
			this.$toast('默认3s后自动关闭', {
				afterClose: () => window.alert('toast组件已经关闭了')
			});
		},
		showOnClose() {
			this.$toast('只能手动关闭', {
				closable: false,
				onClose: () => window.alert('你点击了关闭按钮')
			});
		}
	}
};
</script>
```

## API

提示框 Toast 的属性说明如下：

| 属性       | 说明                               | 类型                    | 默认值 |
| ---------- | ---------------------------------- | ----------------------- | ------ |
| enable     | 是否允许展示 html 标签             | boolean                 | false  |
| closable   | 是否自动关闭                       | boolean                 | true   |
| duration   | 显示时间, 秒。                     | number                  | 3s     |
| position   | toast 显示的位置                   | `top`/`center`/`bottom` | `top`  |
| onClose    | 手动关闭时可设置，点击关闭时的回调 | Function                | null   |
| afterClose | toast 关闭时的回调                 | Function                | null   |
| closeText  | 自定义关闭按钮的文案               | string                  | 关闭   |
