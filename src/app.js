import Vue from 'vue'
import Button from './components/button'
import GIcon from './components/icon'
import WButtonGroup from './components/button-group'

Vue.component('w-button', Button)
Vue.component('w-icon', GIcon)
Vue.component('w-button-group', WButtonGroup)

new Vue({
	el: '#app',
	data: {
		loading1: false
	}
})

import chai from 'chai'
import spies from 'chai-spies' // 用于函数监听调用
chai.use(spies)
const expect = chai.expect

// test icon
{
	const Constructor = Vue.extend(Button)
	const vm = new Constructor({
		propsData: {
			icon: 'setting'
		}
	})

	vm.$mount()
	let useElement = vm.$el.querySelector('use')
	let href = useElement.getAttribute('xlink:href')
	expect(href).to.eq('#i-setting')
	vm.$destroy()
}

// test loading
{
	const div = document.createElement('div')
	document.body.appendChild(div)
	const Constructor = Vue.extend(Button)
	const vm = new Constructor({
		propsData: {
			icon: 'setting',
			loading: true
		}
	})
	vm.$mount(div)
	let useElement = vm.$el.querySelector('use')
	let href = useElement.getAttribute('xlink:href')
	expect(href).to.eq('#i-loading')
	// 释放内存
	vm.$el.remove()
	vm.$destroy()
}

// test click
{
	const Constructor = Vue.extend(Button)
	const vm = new Constructor({
		propsData: 'setting'
	})
	const spy = chai.spy(function () {})
	vm.$mount()
	vm.$on('click', spy)
	vm.$el.click()
	expect(spy).to.have.been.called()

	vm.$destroy()
}
