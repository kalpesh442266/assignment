import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import ErrorPage from "./views/ErrorPage/ErrorPage";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<ErrorPage />} />
    </Provider>
  )
}

export default App;
