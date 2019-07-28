const fs = require('fs');
const path = require('path');
const componentsFile = fs
	.readdirSync(path.join(__dirname, '../components'))
	.map(filename => filename.replace('.vue', ''));

function getComponents(componentsFile) {
	return componentsFile.map(name => `/components/${name}`);
}

module.exports = {
	title: 'VVui',
	description: '一款基于Vue的简洁的UI组件库，我是闹着玩的',
	base: '/wue/',
	themeConfig: {
		nav: [
			{ text: '文档', link: '/introduce.html' },
			{ text: 'Github', link: 'https://github.com/willworkgogogo/wue' }
		],
		sidebar: [
			{
				title: '基础',
				collapsable: false,
				children: ['/introduce', '/about', '/contact']
			},
			{
				title: '组件',
				collapsable: false,
				children: getComponents(componentsFile)
			}
		]
	},
	markdown: {
		lineNumbers: true
	}
};
