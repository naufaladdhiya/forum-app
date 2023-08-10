import React from "react";
import { useDispatch } from "react-redux";

import { unsetAuthUser } from "./states/authedUser/action";

import Router from "./router/router";
import Navigation from "./components/navigation/navigation.component";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(unsetAuthUser());
  };

  return (
    <div className="container mx-auto">
      <header>
        <Navigation onLogOut={handleLogout} />
      </header>

      <main>
        <Router />
      </main>
    </div>
  );
};

export default App;
