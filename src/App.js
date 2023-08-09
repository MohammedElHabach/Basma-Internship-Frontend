import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./Pages/Home/Home";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Home />
      <ToastContainer  />
    </div>
  );
}

export default App;
