import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Services from "./Components/Services";
import Projects from "./Components/ProjectsMain";
import { BallTriangle } from "react-loader-spinner";
import ProjectDetails from "./Components/pages/ProjectDetails";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating loading delay
  }, []);

  return (
    <Router>
      {loading ? (
        <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#d946ef"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="bg-slate-900">
          <Nav />
          <Banner />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <About />
                  <Services />
                  <Projects />
                </>
              }
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            {/* Add other routes as needed */}
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
};

export default App;
