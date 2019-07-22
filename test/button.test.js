const expect = chai.expect;
import Vue from 'vue';
import Button from '../src/components/button';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Button', () => {
	it('存在.', () => {
		expect(Button).to.be.ok;
	});
	it('可以设置icon.', () => {
		const div = document.createElement('div');
		document.body.appendChild(div);
		const Constructor = Vue.extend(Button);
		const vm = new Constructor({
			propsData: {
				icon: 'settings'
			}
		}).$mount(div);
		const useElement = vm.$el.querySelector('use');
		expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings');
		vm.$el.remove();
		vm.$destroy();
	});
	it('可以设置loading.', () => {
		const Constructor = Vue.extend(Button);
		const vm = new Constructor({
			propsData: {
				icon: 'settings',
				loading: true
			}
		}).$mount();
		const useElements = vm.$el.querySelectorAll('use');
		expect(useElements.length).to.equal(1);
		expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading');
		vm.$el.remove();
		vm.$destroy();
	});
	it('button 默认的 flex-direction为 row', () => {
		const div = document.createElement('div');
		document.body.appendChild(div);
		const Constructor = Vue.extend(Button);
		const vm = new Constructor({
			propsData: {
				icon: 'settings'
			}
		}).$mount(div);
		const button = vm.$el;
		expect(getComputedStyle(button).flexDirection).to.eq('row');
		vm.$el.remove();
		vm.$destroy();
	});
	it('设置 iconPosition 为right 可以改变 flex-direction', () => {
		const div = document.createElement('div');
		document.body.appendChild(div);
		const Constructor = Vue.extend(Button);
		const vm = new Constructor({
			propsData: {
				icon: 'settings',
				iconPosition: 'right'
			}
		}).$mount(div);
		const button = vm.$el;
		expect(getComputedStyle(button).flexDirection).to.eq('row-reverse');
		vm.$el.remove();
		vm.$destroy();
	});
	it('点击 button 触发 click 事件', () => {
		const Constructor = Vue.extend(Button);
		const vm = new Constructor({
			propsData: {
				icon: 'settings'
			}
		}).$mount();

		const callback = sinon.fake();
		vm.$on('click', callback);
		vm.$el.click();
		expect(callback).to.have.been.called;
		vm.$el.remove();
		vm.$destroy();
	});
});
