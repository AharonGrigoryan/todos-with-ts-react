import { ITodo } from "../types/data";
import "./style/style.css"

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, removeTodo, toggleTodo } = props;

  return (
    <div className="tasks">
      <div className="content">
        <span style={{ textDecoration: complete ? "line-through" : "" ,
       background: complete?"#4C0918":""
      }}>{title}</span>
      </div>
      <button  onClick={() => toggleTodo(id)}>Done</button>
      <button className="delete" onClick={() => removeTodo(id)}>X</button>
    </div>
  );
};

export { TodoItem };
