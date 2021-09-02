(function(){
    'use strict';

    var vm = new Vue({
        el: '#app',
        data: {
            newItem: '',
            todos: [
                {
                    title: 'title 1',
                    isDone: false
                },
                {
                    title: 'title 2',
                    isDone: false
                },
                {
                    title: 'title 3',
                    isDone: true
                }
            ]
        },
        methods: {
            addItem: function(){
                var item = {
                    title: this.newItem,
                    isDone: false
                }
                this.todos.push(item);
            },
            deleteItem: function(index){
                if(confirm('Are you ok?')){
                    this.todos.splice(index, 1);
                }
            }
        }
    });  
})();