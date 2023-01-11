import NavComponent from "../Components/NavBar/NavComponent";
import { store } from "../Components/Redux/store";
import "../styles/globals.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NavComponent />
      <Component {...pageProps} />
    </Provider>
  );
}
