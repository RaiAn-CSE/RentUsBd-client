import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes";
// import { Typewriter } from 'react-simple-typewriter'

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
