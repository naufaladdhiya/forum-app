import "./App.css";
import Router from "./router/router";

import Navigation from "./components/navigation/navigation.component";

const App = () => {
  return (
    <div className="container mx-auto">
      <header>
        <Navigation />
      </header>

      <main>
        <Router />
      </main>
    </div>
  );
};

export default App;
