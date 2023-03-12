import "./App.css";
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar";
// import Drawer from "./components/Home";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Home from "./components/Home";
function App() {
  return (
    <>
      <Navbar />
      <Drawer />
    </>
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
