import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import store from "./store/store";

function App() {
  /**
    add card component 
    add product grid component
    add cart list component
    add infinite scrolling
    add filters - by price, sorting 
    add product details page
    fix theme colors 
    fix padding
    fix margins

    add loader
    add skeleton
    add error page for react router
    add dynamic skeleton with shimmering effect
    add storybook
  **/
  return (
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<>loading`</>} />
    </Provider>
  )
}

export default App;
