(function (window) {
	'use strict';

	const vm = new Vue({
		el: '.todoapp',
		data: {
			list: [{
					id: 1,
					name: '吃饭',
					completed: true
				},
				{
					id: 2,
					name: '睡觉',
					completed: false
				},
				{
					id: 3,
					name: '上班',
					completed: true
				}
			]
		},
		methods: {
			addTodo(todoName) {
				this.list.unshift({
					id: +new Date(),
					name: todoName,
					completed: false
				})
			},
			delTodo(id) {
				let idx = this.list.findIndex(item => item.id === id)
				this.list.splice(idx, 1)
			},
			clearTodo() {
				this.list = this.list.filter(item => !item.completed)
			},
			updataTodo(id,name){
				this.list.filter(item=>item.id === id).name = name
			}
		}
	})

})(window);
