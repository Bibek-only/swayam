import ProblemsSection from "@/components/home/Problem";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const ProblemPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ProblemsSection />
      </main>
      <Footer />
    </div>
  );
};

export default ProblemPage