import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import {
  addTodo,
  completeTodo,
  removeTodo,
  updateTodo,
} from '../redux/todosSlice';
import { AnimatePresence } from 'framer-motion';
import TodoItem from '../components/TodoItem';

const mapStateToProps = (state) => {
  return { todos: state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodo(obj)),
    removeTodo: (id) => dispatch(removeTodo(id)),
    updateTodo: (obj) => dispatch(updateTodo(obj)),
    completeTodo: (id) => dispatch(completeTodo(id)),
  };
};

const DisplayTodos = (props) => {
  const [sort, setSort] = useState('active');
  return (
    <div className="displayTodos">
      <div>
        <div className="btns">
          <button onClick={() => setSort('active')}>Active</button>
          <button onClick={() => setSort('completed')}>Complete</button>
          <button onClick={() => setSort('all')}>All</button>
        </div>
        <AnimatePresence>
          <ul className="todo-list">
            {props.todos.length > 0 && sort === 'active'
              ? props.map((todo) => {
                  return (
                    todo.completed === false && (
                      <TodoItem
                        key={todo.id}
                        item={todo.item}
                        removeTodo={todo.remove}
                        updateTodo={todo.update}
                        completeTodo={todo.complete}
                      />
                    )
                  );
                })
              : null}

            {props.todos.length > 0 && sort === 'completed'
              ? props.map((todo) => {
                  return (
                    todo.completed === true && (
                      <TodoItem
                        key={todo.id}
                        item={todo.item}
                        removeTodo={todo.remove}
                        updateTodo={todo.update}
                        completeTodo={todo.complete}
                      />
                    )
                  );
                })
              : null}
            {props.todos.length > 0 && sort === 'all'
              ? props.map((todo) => {
                  return (
                    <TodoItem
                      key={todo.id}
                      item={todo.item}
                      removeTodo={todo.remove}
                      updateTodo={todo.update}
                      completeTodo={todo.complete}
                    />
                  );
                })
              : null}
          </ul>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
