import axios from 'axios';

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const FETCH_TODOS = "FETCH_TODOS";


const apiUrl = 'http://localhost:4500/api/todos';

export const fetchAllTodos = () => {
    return (dispatch) => {
        axios.get(apiUrl)
             .then(res => {
                 dispatch({ 
                    type: FETCH_TODOS,
                    payload: res.data
                })
            })
            .catch(error => {
                console.log(error);
                throw (error);
            })
    }
}
export const addTodo = (todo) => {
    return (dispatch) => {
        axios.post(apiUrl,todo)
        .then(res => {
            dispatch({ 
                type: ADD_TODO,
                payload: res.data
            })
        })
        .catch(error => {
            console.log(error);
            throw (error);
        })
    }
}

export const removeTodo = id => {
    return (dispatch) => {
        axios.delete(`${apiUrl}/${id}`)
        .then(res => {
            dispatch({ 
                type: REMOVE_TODO,
                payload: res.data
            })
        })
        .catch(error => {
            console.log(error);
            throw (error);
        })
    }
}

export const toggleTodo = todo => {
    return (dispatch) => {
        axios.put(`${apiUrl}/${todo.id}`, todo)
        .then(res => {
            dispatch({ 
                type: TOGGLE_TODO,
                payload: res.data
            })
        })
        .catch(error => {
            console.log(error);
            throw (error);
        })
    }
}