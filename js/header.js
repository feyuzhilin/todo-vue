Vue.component('todo-header', {
	template: `
        <header class="header">
            <h1>todos</h1>
            <input @keyup.enter="addTodo" v-model="todoName" class="new-todo" placeholder="What needs to be done?" autofocus>
        </header>
    `,
    data(){
        return {
            todoName:''
        }
    },
    methods:{
        addTodo(){
            console.log('111');
            this.$emit('add-todo',this.todoName)
            this.todoName = ''
        }
    }
})
