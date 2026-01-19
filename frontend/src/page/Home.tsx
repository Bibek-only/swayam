import Navbar from '../components/NavBar';
import HeroSection from "../components/home/Hero";
import ProblemsSection from '../components/home/Problem';
import SolutionsSection from "../components/home/Solution";
import FeedbackSection from '../components/home/FeedBack';
import TeamSection from "../components/home/Team";
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemsSection />
        <SolutionsSection />
        <FeedbackSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;