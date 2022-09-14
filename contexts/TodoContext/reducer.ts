import { getCookie, setCookie } from "cookies-next";
import { Todo } from "./types";

export type TodoAction =
  | {
      type: "LOAD";
    }
  | {
      type: "SUBMIT";
      value: string;
    }
  | {
      type: "CHECK";
      index: number;
    }
  | {
      type: "DELETE";
      index: number;
    };

function updateTodos(todo: Todo[]) {
  setCookie("todos", JSON.stringify(todo));
}

export function todoReducer(state: Todo[], action: TodoAction) {
  let newTodo: Todo[];
  switch (action.type) {
    case "LOAD":
      const _todos = getCookie("todos") as string;
      newTodo = _todos ? JSON.parse(_todos) : [];
      break;
    case "CHECK":
      newTodo = [
        ...state.slice(0, action.index),
        {
          ...state[action.index],
          completed: !state[action.index].completed,
        },
        ...state.slice(action.index + 1),
      ];
      break;
    case "DELETE":
      newTodo = [...state.slice(0, action.index), ...state.slice(action.index + 1)];
      break;
    case "SUBMIT":
      newTodo = [...state, { todo: action.value, completed: false, createdAt: Date.now() }];
      break;
  }
  updateTodos(newTodo);
  return newTodo;
}
