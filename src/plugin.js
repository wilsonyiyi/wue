import Toast from './components/toast';

let toastCache;

export default {
	install: Vue => {
		Vue.prototype.$toast = function(message, propsData) {
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
	vm.$on('close', () => {
		toastCache = null;
	});
	document.body.appendChild(vm.$el);
	return vm;
}
