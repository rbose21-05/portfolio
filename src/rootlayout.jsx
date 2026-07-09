import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Meta from "./components/Meta";
import Chatbot from "./components/Chatbot";
import BackToTop from "./components/BackToTop";
import useScrollAnimation from "./hooks/useScrollAnimation";
import Home from "./pages/home";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import Contact from "./pages/contact";

export default function RootLayout() {
    useScrollAnimation();

    return (
        <div className="flex flex-col min-h-screen bg-cream">
            <Meta />
            <Navbar />
            <main className="flex-grow">
                <div id="home"><Home /></div>
                <div id="experience"><Experience /></div>
                <div id="projects"><Projects /></div>
                <div id="skills"><Skills /></div>
                <div id="contact"><Contact /></div>
                <Chatbot />
                <BackToTop />
            </main>
            <Footer />
        </div>
    );
}
