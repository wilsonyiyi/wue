import Vue from 'vue';
import Button from './components/button';
import Icon from './components/icon';
import ButtonGroup from './components/button-group';
import Input from './components/input';
import Row from './components/row';
import Col from './components/col';
import plugin from './plugin';

Vue.use(plugin);

Vue.component('w-button', Button);
Vue.component('w-icon', Icon);
Vue.component('w-button-group', ButtonGroup);
Vue.component('w-input', Input);
Vue.component('w-row', Row);
Vue.component('w-col', Col);

new Vue({
	el: '#app',
	data: {
		loading1: false,
		message: 'test'
	},
	created() {
		this.$toast(
			'黄飞鸿的沙发等哈哈收到货黄飞鸿的沙发等哈哈收到货黄飞鸿的沙发等哈哈收到货黄飞鸿的沙发等哈哈收到货黄飞鸿的沙发等哈哈收到货黄飞鸿的沙发等哈哈收到货'
		);
	},
	methods: {
		inputChange(e) {
			console.log('TCL: inputChange -> e', e);
		},
		showMessage() {}
	}
});
