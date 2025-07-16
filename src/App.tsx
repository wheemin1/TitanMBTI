import { Route, Router, Switch } from "wouter";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Router base="">
        <Switch>
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Toaster />
    </>
  );
}

export default App;