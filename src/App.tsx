import React from "react";
import { UnAuthenticated } from "./unAuthenticated";
import { Authenticated } from "./authenticated";

function App() {
  const isAuth = false;

  return isAuth ? <Authenticated /> : <UnAuthenticated />;
}

export default App;
