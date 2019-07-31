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

describe('Col', () => {
	it('Col 存在.', () => {
		expect(Col).to.exist;
	});

	it('接收 span 属性', done => {
		const html = `
			<w-row>
				<w-col span="12"></w-col>
				<w-col :span="12"></w-col>
			</w-row>
		`;
		const vm = createVm(html);
		setTimeout(() => {
			const cols = vm.$el.querySelectorAll('.col');
			cols.forEach((col, i) => {
				expect(col.className).to.equal('col col-12');
			});
			remove(vm);
			done();
		}, 0);
	});

	it('接收 offset 属性', done => {
		const html = `
			<w-row>
				<w-col offset="12"></w-col>
				<w-col :offset="12"></w-col>
			</w-row>
		`;
		const vm = createVm(html);
		setTimeout(() => {
			const cols = vm.$el.querySelectorAll('.col');
			cols.forEach((col, i) => {
				expect(col.className).to.equal('col offset-12');
			});
			remove(vm);
			done();
		}, 0);
	});

	describe('接收 响应式 属性', () => {
		['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(item => {
			it(`${item}`, done => {
				const html = `
					<w-row>
						<w-col :${item}="{span: 12, offset: 12}"></w-col>
					</w-row>
				`;
				const vm = createVm(html);
				setTimeout(() => {
					const col = vm.$el.querySelector('.col');
					expect(col.className).to.equal(`col col-span-${item}-12 col-offset-${item}-12`);
					remove(vm);
					done();
				}, 0);
			});
		});
	});
});
