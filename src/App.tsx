import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import ErrorPage from "./views/ErrorPage/ErrorPage";

function App() {

  return (
    <>
      <RouterProvider router={router} fallbackElement={<ErrorPage />} />
    </>
  )
}

export default App;
