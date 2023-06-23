import "./App.css";
import ListProducts from "./Components/Listproducts";
import YourCarts from "./Components/YourCarts";

function App() {
  return (
    <div className="container">
      <div>
        <h1 style={{ margin: "40px 0"}}>
          MiniProject - Shopping Cart <small style={{ fontSize : '20px' }} className="text-muted">ReactJS</small>
        </h1>
      </div>
      <div className="row">
        <ListProducts></ListProducts>
        <YourCarts></YourCarts>
      </div>
    </div>
  );
}

export default App;