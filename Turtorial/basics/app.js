new Vue({
	el: '#vue-app',
	data: {
		name: 'Artur',
		job: 'Billioner',
		website: 'http://google.com',
		value: 'Type your Name',
		websiteTag: '<a href="http://google.com" > Link from VueJS </a>'
	},
	methods: {
		greet: function(name) {
			return 'Hey' + name +' '+ this.job;
		}
	}
});