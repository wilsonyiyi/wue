const expect = chai.expect;
import Vue from 'vue';
import Toast from '../src/components/toast';
import { remove } from './util';

Vue.config.productionTip = false;
Vue.config.devtools = false;

function createVm(propsData) {
	const div = document.createElement('div');
	document.body.appendChild(div);
	const Constructor = Vue.extend(Toast);
	const vm = new Constructor({ propsData }).$mount(div);
	return vm;
}

describe('Toast', () => {
	it('存在', () => {
		expect(Toast).to.be.ok;
	});

	describe('props属性设置', () => {
		it('closable为true时，是否自动关闭', done => {
			const vm = createVm({
				closable: true,
				duration: 1
			});
			setTimeout(() => {
				expect(document.body.contains(vm.$el)).to.equal(false);
				remove(vm);
				done();
			}, 1500);
		});

		it('duration 设置200ms关闭', done => {
			const vm = createVm({
				duration: 0.2
			});
			setTimeout(() => {
				expect(document.body.contains(vm.$el)).to.equal(false);
				remove(vm);
				done();
			}, 201);
		});

		it('closeText 设置关闭按钮文案', done => {
			const text = '知道啦';
			const vm = createVm({
				closable: false,
				closeText: text
			});
			setTimeout(() => {
				expect(vm.$el.querySelector('.closeBtn').innerHTML).to.eq(text);
				remove(vm);
				done();
			}, 0);
		});

		describe('position属性', () => {
			const positions = ['top', 'center', 'bottom'];
			positions.forEach(position => {
				it(`定位为${position}`, done => {
					const vm = createVm({ position });
					setTimeout(() => {
						expect(document.querySelector('.outer').className).to.eq(
							`outer position-${position}`
						);
						remove(vm);
						done();
					}, 0);
				});
			});
		});

		it('onClose & afterClose 回调被调用', done => {
			const onCloseCallback = sinon.fake();
			const afterCloseCallback = sinon.fake();
			const vm = createVm({
				onClose: onCloseCallback,
				afterClose: afterCloseCallback
			});
			setTimeout(() => {
				vm.$el.querySelector('.closeBtn').click();
				expect(onCloseCallback).to.have.been.called;
				expect(afterCloseCallback).to.have.been.called;
				remove(vm);
				done();
			}, 0);
		});

		it('enableHtml 为true时', () => {
			const Constructor = Vue.extend(Toast);
			const vm = new Constructor({ propsData: { enableHtml: true } });
			vm.$slots.default = `<strong id="test">你明白了吗</strong>`;
			vm.$mount();
			const strong = vm.$el.querySelector('#test');
			expect(strong).to.exist;
			remove(vm);
		});
	});
});
