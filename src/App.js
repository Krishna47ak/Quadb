import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import store from "./store/store";
import Home from "./screens/Home";
import MovieDetail from "./screens/MovieDetail";
import { fetchMovies } from "./store/actions/movies";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/:id",
    element: <MovieDetail />
  }
])

const App = () => {
  useEffect(() => {
    store.dispatch(fetchMovies())
  }, [])

  return (
    <RouterProvider router={appRouter} />
  )
}

export default App;
