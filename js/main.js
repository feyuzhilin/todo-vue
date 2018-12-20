 Vue.component('todo-main', {
	template: `
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox">
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                <li :class="{completed:item.completed,editing:item.id === clickId}" v-for="item in list" :key="item.id" @dblclick="showEdit(item.id)">
                    <div class="view">
                        <input class="toggle" type="checkbox" v-model="item.completed">
                        <label>{{item.name}}</label>
                        <button class="destroy" @click="delTodo(item.id)"></button>
                    </div>
                    <input class="edit" v-model="item.name" @keyup.enter="updataTodo(item.id,item.name)">
                </li>
            </ul>
        </section>
    `,
	props: ['list'],
	methods: {
		showEdit(id) {
			this.clickId = id
		},
		delTodo(id) {
			this.$emit('del-todo', id)
        },
        updataTodo(id,name){
            this.$emit('updata-todo',id,name),
            this.clickId = -1
        }
	},
	data() {
		return {
			clickId: -1
		}
	}
})
