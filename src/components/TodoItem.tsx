import { ITodo } from "../types/data";
import "./style/style.css"

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  doneTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, removeTodo, doneTodo } = props;

  return (
    <div className="tasks">
      <div className="content">
        <span style={{ textDecoration: complete ? "line-through" : "" ,
       background: complete?"#3F3B6C":""
      }}>{title}</span>
      </div>
      <button  onClick={() => doneTodo(id)}>Done</button>
      <button className="delete" onClick={() => removeTodo(id)}>X</button>
    </div>
  );
};

export { TodoItem };
