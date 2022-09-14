import { createContext, Dispatch, PropsWithChildren, useEffect, useReducer } from "react";
import { TodoAction, todoReducer } from "./reducer";
import { Todo } from "./types";

export type { Todo };

export const TodoContext = createContext<[Todo[], Dispatch<TodoAction>]>([[], () => {}]);

export function TodoContextProvider(props: PropsWithChildren<{}>) {
  const value = useReducer(todoReducer, []);
  const [_, reducer] = value;
  useEffect(() => {
    reducer({ type: "LOAD" });
  }, [reducer]);
  return <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>;
}

export default TodoContext;
