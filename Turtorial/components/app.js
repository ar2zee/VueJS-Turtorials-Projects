var data = {
	name: 'Yoshi'
}

Vue.component('greeting', {
	template: '<p>Hey there. I am component and my name {{name}} <button v-on:click="changeName">Change the name</button></p>',
	data: function() {
		// return data
		return {
			name: 'Artur'
		}
	},
	methods: {
		changeName: function() {
			this.name = 'Mario';
		}
	}
 })


let one = new Vue({
	el: '#vue-app-one',

});

let two = new Vue({
	el: '#vue-app-two',

});

