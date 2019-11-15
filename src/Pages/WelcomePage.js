import React from "react";
import { Header } from "../components/header";
import Weather from "../components/weather";
import NavBar from "../components/navBar";

const WelcomePage = () => {
  return (
    <section>
      <NavBar />
      <Header />
      <Weather />
    </section>
  );
};

export default WelcomePage;
