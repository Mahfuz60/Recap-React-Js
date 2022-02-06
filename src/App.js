// import State from "./Component/State";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Conditional from "./Component/Conditional Rendaring/Conditional";
import GrandFather from "./Component/Relations/GrandFather";


import Home from "./Component/TodoApp/Home";

function App() {
  return (
    <div className="App text-center">
      {/* <State></State> */}

      {/* <Home /> */}
      {/* <Conditional/> */}
      <GrandFather/>
    </div>
  );
}

export default App;
