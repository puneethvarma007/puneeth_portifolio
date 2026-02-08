import React, { Suspense } from "react";
import Loader from "./components/Loader";
const Navbar = React.lazy(() => import("./sections/navbar"));
const Hero = React.lazy(() => import("./sections/Hero"));
const About = React.lazy(() => import("./sections/About"));
const Projects = React.lazy(() => import("./sections/Projects"));
const Experiences = React.lazy(() => import("./sections/Experiences"));
// const Testimonial = React.lazy(() => import("./sections/Testimonial"));
const Contact = React.lazy(() => import("./sections/Contact"));
const Footer = React.lazy(() => import("./sections/Footer"));
// const Loader = React.lazy(() => import("./components/Loader"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="container mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experiences />
        {/* <Testimonial /> */}
        <Contact />
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
