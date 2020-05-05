import React from "react";
import "./App.css";
import AddContact from "./Components/AddContact";
import DisplayContactList from "./Components/DispalyContactList";
import { Provider } from "react-redux";
import store from "./Store/store";
import Home from "./Components/Main"
import {Route} from "react-router-dom"
import UpdateContact from "./Components/UpdateContact"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Route path ="/" component={Home}></Route>
        <Route exact path="/add_contact" component={AddContact}></Route>
        <Route exact path ="/display_contact" component={DisplayContactList}></Route>
        <Route exact path ="/update_contact" component={UpdateContact}></Route>
      </Provider>
    </div>
  );
}

export default App;
