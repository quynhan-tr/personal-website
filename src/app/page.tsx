import ExperiencePage from "./experience/page";
import NavBar from "@/components/navBar";
import ProjectPage from "./project/page";
import Footer from "@/components/footer"
import AboutPage from "./about/page";

export default function Home() {
  return (
    <>
    <NavBar />
    <AboutPage />
    <ExperiencePage />
    <ProjectPage />
    <Footer />
    </>
  );
}
