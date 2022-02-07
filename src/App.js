 import State from "./Component/State";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Conditional from "./Component/Conditional Rendaring/Conditional";
import GrandFather from "./Component/Relations/GrandFather/GrandFather";
import "./App.css";
import Home from "./Component/TodoApp/Home";
import { createContext } from "react";
export const RingContext = createContext("ring");
const Ring = "Diamond Ring";

function App() {
  return (
    <RingContext.Provider value={Ring}>
      <div className="App ">
        <State></State>

        <Home />
        <Conditional />
        <GrandFather house="5" />
      </div>
    </RingContext.Provider>
  );
}

export default App;
