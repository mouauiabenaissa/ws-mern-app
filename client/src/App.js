import { Route, Switch } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import UsersList from "./components/UsersList";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import PrivateRoute from "./routes/PrivateRoute";
import AddUser from "./components/AddUser";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />

        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/users" component={UsersList} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/create-user" component={AddUser} />
      </Switch>
    </div>
  );
}

export default App;
