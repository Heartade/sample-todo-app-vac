import { Todo } from "contexts/TodoContext";
import { TodoAction } from "contexts/TodoContext/reducer";
import React, { Dispatch, useCallback } from "react";
import { ListItemView, ListItemViewProps } from "./ListItemView";

export type ListItemProps = {
  todo: Todo;
  index: number;
  todoReducer: Dispatch<TodoAction>;
};

export function ListItem({ todo, index, todoReducer }: ListItemProps) {
  const handleChecked = useCallback(() => {
    todoReducer({ type: "CHECK", index });
  }, [index, todoReducer]);

  const handleDelete = useCallback(() => {
    todoReducer({ type: "DELETE", index });
  }, [index, todoReducer]);

  const props: ListItemViewProps = {
    completed: todo.completed,
    todo: todo.todo,
    handleChecked,
    handleDelete,
  };

  return <ListItemView {...props} />;
}
