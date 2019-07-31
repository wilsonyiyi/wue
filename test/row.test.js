const expect = chai.expect;
import Vue from 'vue';
import Row from '../src/components/row';
import Col from '../src/components/col';

Vue.config.productionTip = false;
Vue.config.devtools = false;

function createVm(html) {
	Vue.component('w-row', Row);
	Vue.component('w-col', Col);
	const div = document.createElement('div');
	document.body.appendChild(div);
	div.innerHTML = html;
	const vm = new Vue({
		el: div
	});

	return vm;
}

function remove(vm) {
	vm.$el.remove();
	vm.$destroy();
}

describe('Row', () => {
	it('Row 存在.', () => {
		expect(Row).to.exist;
	});

	it('接收 gutter 属性', done => {
		const html = `
			<w-row gutter="16">
				<w-col></w-col>
			</w-row>
		`;
		const vm = createVm(html);
		setTimeout(() => {
			expect(vm.$el.querySelector('.row').style.marginLeft).to.equal('-8px');
			expect(vm.$el.querySelector('.col').style.paddingLeft).to.equal('8px');
			remove(vm);
			done();
		}, 0);
	});

	it('接收 align 属性', done => {
		const html = `
			<w-row align="top">
				<w-col></w-col>
			</w-row>
			<w-row align="middle">
				<w-col></w-col>
			</w-row>
			<w-row align="bottom">
				<w-col></w-col>
			</w-row>
		`;
		const vm = createVm(html);
		setTimeout(() => {
			const rows = vm.$el.querySelectorAll('.row');
			expect(rows[0].style.alignItems).to.equal('flex-start');
			expect(rows[1].style.alignItems).to.equal('center');
			expect(rows[2].style.alignItems).to.equal('flex-end');
			remove(vm);
			done();
		}, 0);
	});

	it('接收 justify 属性', done => {
		const html = `
			<w-row justify="start"></w-row>
			<w-row justify="end"></w-row>
			<w-row justify="center"></w-row>
			<w-row justify="space-around"></w-row>
			<w-row justify="space-between"></w-row>
		`;
		const vm = createVm(html);
		setTimeout(() => {
			const rows = vm.$el.querySelectorAll('.row');
			['start', 'end', 'center', 'space-around', 'space-between'].forEach((item, index) => {
				expect(rows[index].style.justifyContent).to.equal(item);
			});
			done();
		}, 0);
	});
});
