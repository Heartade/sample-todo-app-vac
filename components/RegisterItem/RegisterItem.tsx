import { useContext } from "react";
import { useForm } from "react-hook-form";
import TodoContext from "contexts/TodoContext";
import { RegisterItemView } from "./RegisterItemView";

export function RegisterItem() {
  const [_, todoReducer] = useContext(TodoContext);
  const { register, handleSubmit: onSubmit, reset } = useForm();

  const handleSubmit = onSubmit((todo) => {
    if (typeof todo.todo === "string") {
      todoReducer({
        type: "SUBMIT",
        value: todo.todo,
      });
    }
    reset();
  });

  const inputProps = register("todo");

  return <RegisterItemView {...{ handleSubmit, inputProps }} />;
}
