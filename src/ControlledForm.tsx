import { useState } from "react";

export default function ControlledForm() {
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] =useState("")
  const [email, setEmail] =useState("")
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(inputValue , password , email);
    setInputValue("");
    setPassword("");
    setEmail("")
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
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <input
        type="password"
        placeholder="enter password..."
        className="w-1/3 py-3 pl-2 outline-none bg-slate-100"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <input
        type="email"
        placeholder="enter email..."
        className="w-1/3 py-3 pl-2 outline-none bg-slate-100"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
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
