import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from './views/components/Header';
import Footer from './views/components/Footer';
import Home from "./views/pages/Home";

export default function Screens() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/" exact children={<Home />} />
      </Switch>
      <Footer/>
    </div>
  );
}
