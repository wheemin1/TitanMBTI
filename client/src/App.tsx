import { Route, Router } from "wouter";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Router>
      <Toaster />
    </>
  );
}

export default App;