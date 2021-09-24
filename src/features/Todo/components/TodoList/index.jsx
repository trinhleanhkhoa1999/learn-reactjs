import React from 'react';
import PropTypes from 'prop-types';
// import './styles.scss'

TodoList.propTypes = {
    todoList1: PropTypes.array,
};
// TodoList.defaultProps = {
//     todoList1: [],
// };

function TodoList(props) {
    const { todoList1, khoa } = props;
    // const khoa = props.todoList1;
    // const kiet = props.name;


    return (
        <>
            <ul>
                {todoList1.map(todo => (
                    <li key={todo.id} onClick={() => khoa(todo)}>{todo.title}</li>
                ))}
            </ul>


        </>
    );
}

export default TodoList;