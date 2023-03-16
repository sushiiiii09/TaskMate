import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [taskName, setTaskName] = useState("");

  function handleSubmit(ev) {
    ev.preventDefault();
    onAdd(taskName);
    setTaskName("");
  }
  return (
    <form class="" onSubmit={handleSubmit}>
      <div class="container  flex justify-center items-center">
        <div class="relative">
          <div class="absolute top-4 left-3"></div>

          <input
            type="text"
            class="h-14 w-60 sm:w-full pl-10 pr-20 bg-white border-purple-100 border-4 rounded-lg z-0 focus:shadow focus:outline-none"
            placeholder="Your next task ?"
            value={taskName}
            onChange={(ev) => setTaskName(ev.target.value)}
          />

          <div class="absolute top-2 right-2 mr-1">
            <button class="h-10 w-10 text-2xl text-white rounded-full bg-purple-300 hover:bg-purple-500 ">
              +
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
