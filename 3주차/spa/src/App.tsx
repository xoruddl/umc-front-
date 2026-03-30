import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./layout/Root-layout";
import HomePage from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/Not-found";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        // /movies/뒤에 오는 값을 movieId라는 이름으로 받겠다는 뜻
        path: "movies/:movieId",
        element: <Movies />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
