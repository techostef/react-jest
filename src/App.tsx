import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import './App.css';
import Home from './pages/Home';
import RecipeDetail from "./pages/RecipeDetail";
import { FAVORITE_URL, HOME_URL, RECIPE_DETAIL_URL } from "./features/shared/constants";
import Favorite from "./pages/Favorite";

const router = createBrowserRouter([
  {
    path: HOME_URL,
    element: (<Home />),
  },
  {
    path: `${RECIPE_DETAIL_URL}/:id`,
    element: (<RecipeDetail />),
  },
  {
    path: `${FAVORITE_URL}`,
    element: (<Favorite />),
  },
]);

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
