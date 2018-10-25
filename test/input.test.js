const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/components/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
	it('存在.', () => {
		expect(Input).to.be.ok
	})

	describe('Props', () => {
		const Constructor = Vue.extend(Input)
		let vm
		afterEach(function() {
			vm.$destroy()
		})

		it('接收 value.', () => {
			vm = new Constructor({
				propsData: {
					value: 'Wilson'
				}
			}).$mount()
			const inputElement = vm.$el.querySelector('input')
			expect(inputElement.value).to.equal('Wilson')
		})

		it('接收 disabled.', () => {
			vm = new Constructor({
				propsData: {
					disabled: true
				}
			}).$mount()
			const inputElement = vm.$el.querySelector('input')
			expect(inputElement.disabled).to.equal(true)
		})

		it('接收 readonly.', () => {
			vm = new Constructor({
				propsData: {
					readonly: true
				}
			}).$mount()
			const inputElement = vm.$el.querySelector('input')
			expect(inputElement.readOnly).to.equal(true)
		})

		it('接收 error.', () => {
			const errorText = 'error tip text'
			vm = new Constructor({
				propsData: {
					error: errorText
				}
			}).$mount()
			const wrapperElement = vm.$el
			const useElement = wrapperElement.querySelector('use')
			const spanElement = wrapperElement.querySelector('span')
			expect(wrapperElement.className.indexOf('error') > -1).to.equal(true)
			expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
			expect(spanElement.innerHTML).to.equal(errorText)
		})
	})

	describe('事件', () => {
		const Constructor = Vue.extend(Input)
		let vm
		afterEach(() => {
			vm.$destroy()
		})

		it('触发change/focus/blur/input事件', () => {
			['change', 'focus', 'blur', 'input'].forEach((eventName) => {
				vm = new Constructor({}).$mount()
				const callback = sinon.fake()

				vm.$on(eventName, callback)
				const inputElement = vm.$el.querySelector('input')
				let event = new Event(eventName)
				Object.defineProperty(event, 'target', {
					value: {value: 'hi'},
					enumerable: true
				})
				inputElement.dispatchEvent(event)
				expect(callback).to.have.been.calledWith('hi')
			})
		})
	})
})