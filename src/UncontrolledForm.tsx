import { useRef } from "react";

export default function UncontrolledForm() {
  const inputValue = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(inputValue.current?.value);
    console.log(password.current?.value);
    console.log(email.current?.value);

    if (inputValue.current) inputValue.current.value = "";
    if (password.current) password.current.value = "";
    if (email.current) email.current.value = "";
  };

  return (
    <form
      onSubmit={submitForm}
      className="flex justify-center items-center h-screen gap-3 flex-col"
    >
      <input
        type="text"
        placeholder="name"
        className="w-1/3 py-3 pl-2 outline-none bg-slate-100"
        ref={inputValue}
      />

      <input
        type="password"
        placeholder="enter password..."
        className="w-1/3 py-3 pl-2 outline-none bg-slate-100"
        ref={password}
      />

      <input
        type="email"
        placeholder="enter email..."
        className="w-1/3 py-3 pl-2 outline-none bg-slate-100"
        ref={email}
      />
      <button
        type="submit"
        className="py-2 px-4 rounded bg-blue-200 text-gray-500"
      >
        Submit
      </button>
    </form>
  );
}
