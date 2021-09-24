import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';


TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const todoList = [
        {
            id: 1,
            title: 'Eat'
        },
        {
            id: 2,
            title: 'Sleep'
        },
        {
            id: 3,
            title: 'Code'
        },
    ]
    const truyen = (e) => {
        console.log(e);
    }
    return (
        <div>
            <h3>TodoList</h3>
            <TodoList todoList1={todoList} khoa={truyen} />
        </div>
    );
}

export default TodoFeature;