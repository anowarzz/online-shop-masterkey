import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import HomePage from "./Pages/HomePage/HomePage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: '/',
          element: <HomePage />
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
