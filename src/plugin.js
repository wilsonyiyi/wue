import Toast from './components/toast';

let toastCache;

export default {
	install: Vue => {
		Vue.prototype.$toast = function(message, propsData) {
			console.log('TCL: Vue.prototype.$toast -> propsData', propsData);
			console.log('TCL: Vue.prototype.$toast -> toastCache', toastCache);
			if (toastCache) {
				toastCache.close();
			}
			toastCache = createToast({
				Vue,
				message,
				propsData
			});
		};
	}
};

function createToast({ Vue, message, propsData }) {
	const Constructor = Vue.extend(Toast);
	const vm = new Constructor({ propsData });
	vm.$slots.default = message;
	vm.$mount();
	document.body.appendChild(vm.$el);
	return vm;
}
