import Vue from 'vue'
import Button from './components/button'
import Icon from './components/icon'
import ButtonGroup from './components/button-group'
import Input from './components/input'

Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('w-button-group', ButtonGroup)
Vue.component('w-input', Input)

new Vue({
	el: '#app',
	data: {
		loading1: false,
		message: 'test'
	},
	methods: {
		inputChange(e) {
			console.log(e.target.value);
		}
	}
})
