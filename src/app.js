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