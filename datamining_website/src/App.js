import "./App.css";
import AboutSection from "./components/aboutSection.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
function App() {
  return (
    <main className="flex min-h-screen flex-col bg-[#a8daff]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <section>
          <Home />
        </section>
        <section>
          <AboutSection />
        </section>
        <section>
          <ProjectSection />
        </section>
      </div>
      {<Footer />}
    </main>
  );
}

export default App;
