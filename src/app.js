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
const expect = chai.expect

{
	const Constructor = Vue.extend(Button)
	const button = new Constructor({
		propsData: {
			icon: 'setting'
		}
	})

	button.$mount('#test')
	let useElement = button.$el.querySelector('use')
	let href = useElement.getAttribute('xlink:href')
	expect(href).to.eq('#i-setting')
}