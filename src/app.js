import Vue from 'vue';
import Button from './components/button';
import Icon from './components/icon';
import ButtonGroup from './components/button-group';
import Input from './components/input';
import Row from './components/row';
import Col from './components/col';
import plugin from './plugin';
import Poptip from './components/poptip';

Vue.use(plugin);

Vue.component('w-button', Button);
Vue.component('w-icon', Icon);
Vue.component('w-button-group', ButtonGroup);
Vue.component('w-input', Input);
Vue.component('w-row', Row);
Vue.component('w-col', Col);
Vue.component('w-poptip', Poptip);

new Vue({
	el: '#app',
	methods: {
		click() {
			// console.log('111');
		}
	}
});
