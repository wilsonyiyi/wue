import Toast from './components/toast';

export default {
	install: Vue => {
		Vue.prototype.$toast = function(content) {
			const Constructor = Vue.extend(Toast);
			const vm = new Constructor({
				propsData: {
					closable: false,
					enableHtml: true,
					onClose: () => console.log('点击了关闭按钮'),
					closeText: '关闭'
				}
			});
			vm.$slots.default = content;
			vm.$mount();
			document.body.appendChild(vm.$el);
		};
	}
};
