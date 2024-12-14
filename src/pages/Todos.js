import { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Container } from 'react-bootstrap';
import github from '../assets/github.svg';
import {
  addTodo,
  completeTodo,
  removeTodo,
  updateTodo,
} from '../redux/todosSlice';
import '../css/todo.css';
import MotionWrapper from '../components/MotionWrapper';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import DisplayTodo from '../components/DisplayTodo';

const mapStateToProps = (state) => ({ todos: state });
const mapDispatchToProps = (dispatch) => ({
  addTodo: (obj) => dispatch(addTodo(obj)),
  removeTodo: (id) => dispatch(removeTodo(id)),
  updateTodo: (obj) => dispatch(updateTodo(obj)),
  completeTodo: (id) => dispatch(completeTodo(id)),
});

const Todos = (props) => {
  const [state, setState] = useState({
    todo: '',
    editingId: null,
    editValue: '',
    sort: 'all',
    isFilterClicked: false,
  });

  const handleAdd = () => {
    if (state.todo.trim()) {
      const isDuplicate = props.todos.some(
        (todo) => todo.item.trim() === state.todo.trim(),
      );

      if (!isDuplicate) {
        props.addTodo({
          id: uuidv4(),
          item: state.todo.trim(),
          completed: false,
        });
        setState((prev) => ({ ...prev, todo: '' }));
      } else {
        alert('This task already exists!');
      }
    }
  };

  const handleEdit = (id, value) => {
    const todo = props.todos.find((todo) => todo.id === id);
    if (todo) {
      const updatedTodo = { ...todo, item: value, completed: false }; // Reset completed
      props.updateTodo(updatedTodo);

      setState((prev) => ({
        ...prev,
        editingId: id,
        editValue: value,
      }));
    }
  };
  const handleSave = (id) => {
    if (state.editValue.trim()) {
      props.updateTodo({ id, item: state.editValue });
      setState((prev) => ({ ...prev, editingId: null, editValue: '' }));
    }
  };

  const handleCancel = () => {
    setState((prev) => ({ ...prev, editingId: null, editValue: '' }));
  };

  const handleSort = (sortOption) => {
    setState((prev) => ({ ...prev, sort: sortOption, isFilterClicked: true }));
  };

  return (
    <MotionWrapper>
      <div className="todo_container">
        <div className="todo_con">
          <TodoInput
            value={state.todo}
            onChange={(e) =>
              setState((prev) => ({ ...prev, todo: e.target.value }))
            }
            onAdd={handleAdd}
          />
          <DisplayTodo
            todos={props.todos}
            sort={state.sort}
            onSort={handleSort}
            isFilterClicked={state.isFilterClicked}
            onComplete={props.completeTodo}
            onDelete={props.removeTodo}
            onEdit={handleEdit}
            onEditChange={(e) =>
              setState((prev) => ({ ...prev, editValue: e.target.value }))
            }
            onSave={handleSave}
            onCancel={handleCancel}
          />
          {!state.isFilterClicked && (
            <TodoList
              todos={props.todos}
              editingId={state.editingId}
              editValue={state.editValue}
              onEdit={handleEdit}
              onEditChange={(e) =>
                setState((prev) => ({ ...prev, editValue: e.target.value }))
              }
              onSave={handleSave}
              onCancel={handleCancel}
              onComplete={props.completeTodo}
              onDelete={props.removeTodo}
            />
          )}
        </div>
      </div>
      <footer>
        <Container>
          <div className="footer text-center">
            <p>Go to codes</p>
            <a
              href="https://github.com/hosamaboud/todo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              <img
                src={github}
                alt="GitHub icon"
                className="footer_img"
                style={{ width: '30px', height: '30px', margin: '10px' }}
              />
            </a>
            <p>&copy; 2024 Aboud</p>
          </div>
        </Container>
      </footer>
    </MotionWrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
