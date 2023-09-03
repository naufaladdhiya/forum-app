import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { unsetAuthUser } from "./states/authedUser/action";

import Router from "./router/router";
import Loading from "./components/ui/loading/loading.component";
import Layout from "./layout/layout.component";
import Navigation from "./components/navigation/navigation.component";
import "./App.css";

const App = () => {
  const { isPreload = false } = useSelector((states) => states);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(unsetAuthUser());
  };

  if (isPreload) return null;

  return (
    <>
      <Loading />
      <header>
        <Navigation onLogOut={handleLogout} />
      </header>

      <main>
        <Layout>
          <Router />
        </Layout>
      </main>
    </>
  );
};

export default App;
