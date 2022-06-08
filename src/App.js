import Header from "./components/header";
import Body from "./components/body";
import store from "./store/store";
import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <Body />
    </Provider>
  );
}
