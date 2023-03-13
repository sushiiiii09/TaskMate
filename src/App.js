import "./App.css";
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import { useEffect, useState } from "react";
// import Drawer from "./components/Home";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Home from "./components/Home";
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
      //ask arnav what is this ...prev
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
    if (percentage === 0) {
      return "Try to do at least one! 🙏";
    }
    if (percentage === 100) {
      return "Nice job for today! 🏝";
    }
    return "Keep it going 💪🏻";
  }

  function renameTask(index, newName) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    });
  }

  return (
    // <div className="bg-gradient-to-br from-orange-100 via-violet-400 to-violet-400">
    <div className="bg-[#d8d3fc]">
      <Navbar />
      <div className="flex ">
        <Drawer />
        <div className="max-w-xs my-20 mx-auto space-y-3">
          <h1 className="text-center text-5xl text-black">
            {numberComplete}/{numberTotal} Completed
          </h1>
          <h2 className="text-center text-black text-2xl">{getMessage()}</h2>
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

    // <BrowserRouter>
    //   <div className="App bg-slate-900 min-h-screen flex ">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
