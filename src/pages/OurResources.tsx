import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OurResources = () => {
  return (
    <>
      <Helmet>
        <title>Our Resources | Sincerely, People With Periods</title>
        <meta
          name="description"
          content="Access helpful resources about period poverty, menstrual health education, and ways to get involved."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {/* Hero Section with Light Orange Background */}
          <section className="bg-orange-100 py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-foreground">
                Our Resources
              </h1>
            </div>
          </section>

          {/* Content Section - Placeholder for future content */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              {/* Content will be added here */}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default OurResources;
