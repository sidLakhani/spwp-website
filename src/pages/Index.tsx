import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CalloutSection from "@/components/CalloutSection";
import IssueSection from "@/components/IssueSection";
import MissionSection from "@/components/MissionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sincerely, People With Periods | Fighting Period Poverty</title>
        <meta
          name="description"
          content="A student-led nonprofit fighting period poverty through education, advocacy, and community action in Richmond, Virginia."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <CalloutSection />
          <IssueSection />
          <MissionSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
