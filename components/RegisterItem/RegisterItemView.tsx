import { ComponentPropsWithoutRef, FormEventHandler } from "react";

export type RegisterItemViewProps = {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  inputProps: Partial<ComponentPropsWithoutRef<"input">>;
};

export function RegisterItemView({ handleSubmit, inputProps }: RegisterItemViewProps) {
  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <input {...inputProps} type="text" className="input input-bordered w-full" placeholder="Add Some Todo..." />
      <button className="btn btn-primary">추가하기</button>
    </form>
  );
}
