import Vue from 'vue'
import Button from './button'
import GIcon from '../src/components/Icon'

Vue.component('g-button', Button)
Vue.component('g-icon', GIcon)

new Vue({
	el: '#app',
	data: {
		loading1: false
	}
})