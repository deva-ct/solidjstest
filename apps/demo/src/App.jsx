import { LibApp } from "ui";
import LocalComponent from "./LocalComponent";

function App() {
  return (
    <div>
      <LocalComponent value="Local" />
      <LibApp value="Hello" />
    </div>
  );
}

export default App;
