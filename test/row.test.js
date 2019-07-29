const expect = chai.expect;
import Row from '../components/row';
import Col from '../components/col';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Row', () => {
	it('Row 存在.', () => {
		expect(Row).to.exist;
	});
});
