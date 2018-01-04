new Vue({
	el: '#vue-app',
	data: {
		name: 'Artur',
		age: 21,
		x: 0,
		y: 0

	},
	methods: {
		add: function(inc) {
			this.age += inc
		},
		substract: function(dec){
			this.age -= dec
		},
		updateXY: function(event){
			this.x = event.offsetX;
			this.y = event.offsetY;
			console.log(event)
		},
		click: function() {
			alert(1)
		}
	}
});