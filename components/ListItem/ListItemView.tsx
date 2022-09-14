import React from "react";

export type ListItemViewProps = {
  completed: boolean;
  todo: string;
  handleChecked: () => void;
  handleDelete: () => void;
};

export function ListItemView({ completed, todo, handleChecked, handleDelete }: ListItemViewProps) {
  return (
    <div className="flex items-center gap-4">
      <input type="checkbox" checked={completed} onChange={handleChecked} className="checkbox" />
      <span onClick={handleChecked} className="flex-1 cursor-pointer">
        {completed ? <s>{todo}</s> : todo}
      </span>
      <button onClick={handleDelete} className="btn btn-square btn-error btn-xs">
        X
      </button>
    </div>
  );
}
