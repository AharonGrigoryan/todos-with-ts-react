import { TodoItem } from "./TodoItem";
import { ITodo } from "../types/data";


interface ITodoListProps {
  items: ITodo[];
  removeTodo: (id: number) => void;
  doneTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {
  const { items, removeTodo, doneTodo } = props;
  return (
      <div>
        {items.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            removeTodo={removeTodo}
            doneTodo={doneTodo}
          />
        ))}
    </div>
  );
};

export { TodoList };
