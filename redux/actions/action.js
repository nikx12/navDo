const ADD_TODO = 'TODO/TODO/ADD_TODO';
const UPDATE_TODO = 'TODO/TODO/UPDATE_TODO';
const DELETE_TODO = 'TODO/TODO/DELETE_TODO';

export function addTodo(todo) {    
    return {
        type: ADD_TODO,
        todo,
    };
}

export function updateTodo(todo){
    return {
        type: UPDATE_TODO,        
        todo,
    }
}

export function deleteTodo(todo){
    return {
        type: DELETE_TODO,
        todo,        
    }
}