import ReactDOM from "react-dom/client";
import "./sass/theme.scss";
import "./sass/main.scss";
import "./sass/Styles.css";
import { App } from "./App";
import { UserProvider, UiProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UiProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </UiProvider>
);
