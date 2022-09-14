import { useContext } from "react";
import TodoContext from "contexts/TodoContext";
import ListItem from "./ListItem";
import { ListItemProps } from "./ListItem/ListItem";

export default function ListView() {
  const [todos, todoReducer] = useContext(TodoContext);

  return (
    <>
      {todos
        .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
        .sort((a, b) => +a.completed - +b.completed)
        .map((todo, index) => {
          const props: ListItemProps = {
            todo,
            index,
            todoReducer,
          };
          return <ListItem key={+todo.createdAt} {...props} />;
        })}
    </>
  );
}
