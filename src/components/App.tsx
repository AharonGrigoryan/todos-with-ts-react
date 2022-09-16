import { useState, useRef, useEffect } from "react";
import { ITodo } from "../types/data";
import { TodoList } from "./TodoList";
import "./style.css";

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          complete: false,
        },
      ]);
      setValue("");
    }
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          complete: !todo.complete,
        };
      })
    );
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            placeholder="Task..."
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            ref={inputRef}
          />
        </div>
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="task-container">
        <span style={{ display: todos.length !== 0 ? "none" : "" }}>
          Enter your first Todo
        </span>

        <TodoList
          items={todos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
};

export { App };
