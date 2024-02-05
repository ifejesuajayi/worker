import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Landing from "./components/landing";
import Connect from "./components/connect";
import Login from "./components/login";
import Signupoption from "./components/signupoption";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Connect />
      <Footer />
      <Login />
      <Signupoption />
    </>
  );
}

export default App;
