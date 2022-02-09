import React, { Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";

import './app.css';

import LoadingSpinner from "./components/loadingSpinner/LoadingSpinner";
// import Home from "./components/pages/home/home";
// import Info from "./components/pages/info/Info";
// import About from "./components/pages/about/about";
// import Gallery from "./components/pages/gallery/Gallery";
// import Contact from "./components/pages/contact/Contact";
// import NotFound from "./components/pages/notFound/NotFound";


const Home = React.lazy(() => import("./components/pages/home/home"));
const Info = React.lazy(() => import("./components/pages/info/Info"));
const About = React.lazy(() => import("./components/pages/about/about"));
const Gallery = React.lazy(() => import("./components/pages/gallery/Gallery"));
const Contact = React.lazy(() => import("./components/pages/contact/Contact"));
const NotFound = React.lazy(() => import("./components/pages/notFound/NotFound"));


function App() {
  return (
    <div className="app">
      <Header />

      <section>
        <Suspense fallback={<LoadingSpinner />}>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/info">
              <Info />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/gallery">
              <Gallery />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </section>

      <Footer />
    </div>
  );
}

export default App;
