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
          <div class="absolute top-4 left-3">
            <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
          </div>
          <input
            type="text"
            class="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
            placeholder="Your next task"
            value={taskName}
            onChange={(ev) => setTaskName(ev.target.value)}
          />
          <div class="absolute top-2 right-2">
            <button class="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600">
              Add
            </button>
          </div>
        </div>
      </div>
    </form>

    // <form
    //   onSubmit={handleSubmit}
    //   className=" space-x-4 bg-gray-300 rounded-full  flex p-2"
    // >
    //   <button className="bg-purple-500  rounded-full cursor-pointer leading-3 p-1  text-white px-5">
    //     +
    //   </button>

    //   <input
    //     className=" bg-white text-black  border-1 border-black  p-3 block w-[100%] rounded-full"
    //     type="text"
    //     value={taskName}
    //     onChange={(ev) => setTaskName(ev.target.value)}
    //     placeholder="Your next task..."
    //   />
    // </form>
  );
}
