import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Gallery from "./components/pages/Gallery";
import Contacts from "./components/pages/Contacts";
import { Route, Switch, Redirect } from "react-router-dom";

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home">
          <Redirect to="/" />
        </Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/contacts" component={Contacts} />
      </Switch>
    </div>
  );
};
