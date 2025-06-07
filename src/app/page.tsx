import ExperiencePage from "./experience/page";
import NavBar from "@/components/navBar";
import ProjectPage from "./project/page";
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
    <NavBar />
    <ExperiencePage />
    <ProjectPage />
    <Footer />
    </>
  );
}
