import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import { Provider } from "react-redux";
import ItemModal from "./components/ItemModal";
import { Container } from "reactstrap";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
