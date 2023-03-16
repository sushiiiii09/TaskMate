import "./App.css";
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks || []);
  }, []);

  function addTask(name) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  function removeTask(indexToRemove) {
    setTasks((prev) => {
      return prev.filter((taskObject, index) => index !== indexToRemove);
    });
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  const numberComplete = tasks.filter((t) => t.done).length;

  //local storage mei jo task hai uska length

  const numberTotal = tasks.length;

  function getMessage() {
    const percentage = (numberComplete / numberTotal) * 100;
    if (numberTotal === 0) {
      return "Enter your Tasks for today";
    } else {
      if (percentage === 0) {
        return "Try to do at least one!😠";
      }
      if (percentage === 100) {
        return "Nice job for today!🙌🏻";
      }
      return "Keep going🥹";
    }
  }

  function renameTask(index, newName) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    });
  }

  return (
    <div className="bg-[#d8d3fc] overflow-x-hidden ">
      <Navbar />
      <div className="flex bg-[#d8d3fc]">
        <Drawer />

        <div className="my-20 mx-auto space-y-3 bg-[#d8d3fc]">
          <h2 className="text-center sm:text-5xl text-2xl text-Logo text-black">
            {numberComplete}/{numberTotal} completed
          </h2>
          <h2 className="text-center text-black text-xl pb-2">
            {getMessage()}
          </h2>

          <TaskForm onAdd={addTask} />

          {tasks.map((task, index) => (
            <Task
              {...task}
              onRename={(newName) => renameTask(index, newName)}
              onTrash={() => removeTask(index)}
              onToggle={(done) => updateTaskDone(index, done)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
