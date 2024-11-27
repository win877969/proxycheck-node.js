const test = async () => {
	const proxy_check = require('.');
	const check = new proxy_check({ api_key: '734170-3769r4-5oo3ml-k75t35' });
	const result = await check.getUsage();
	console.log(result);
};
test();
