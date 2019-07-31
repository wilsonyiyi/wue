export function remove(vm) {
	vm.$el.remove();
	vm.$destroy();
}
