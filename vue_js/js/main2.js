(function(){
    'use strice'

    var vm = new Vue({
        el: '#app',
        data: {
            newItem: '',
            todos:[
                {
                    title: 'todo 1',
                    isDone: false
                },
                {
                    title: 'todo 2',
                    isDone: false
                },
                {
                    title: 'todo 3',
                    isDone: true
                },
            ]
        },
        methods: {
            addItem: function(){
                this.todos.push(this.newItem);
            },
            deleteItem: function(index){
                if(confirm('Are you ok?')){
                    this.todos.splice(index, 1);
                }
            }
        }
    });

})();