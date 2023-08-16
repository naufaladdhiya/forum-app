import React from "react";
import { useDispatch } from "react-redux";

import { unsetAuthUser } from "./states/authedUser/action";

import Router from "./router/router";
import Layout from "./layout/layout.component";
import Navigation from "./components/navigation/navigation.component";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(unsetAuthUser());
  };

  return (
    <Layout>
      <header>
        <Navigation onLogOut={handleLogout} />
      </header>

      <main>
        <Router />
      </main>
    </Layout>
  );
};

export default App;
