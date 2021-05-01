import { BrowserRouter,Switch,Route } from "react-router-dom";
import React from 'react'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"
import services from "./pages/Services";
import Navbar from "./components/Navbar";
import ServiceDetails from "./pages/ServiceDetails";
import PageNotFound from "./pages/PageNotFound";

export default function Router() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/About" component={About}/>
                <Route path="/Contact" component={Contact}/>
                <Route exact path="/Services" component={services}/>
                <Route path="/Services/:id" component={ServiceDetails}/>
                <Route component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
    )
}
