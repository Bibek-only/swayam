import SolutionsSection from "@/components/home/Solution";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const SolutionPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <SolutionsSection/>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionPage