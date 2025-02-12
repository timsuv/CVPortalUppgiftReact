import { router } from "./Router";
import { RouterProvider } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
