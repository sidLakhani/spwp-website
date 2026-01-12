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
          {/* Hero Section with Light Pink Background */}
          <section className="bg-pink-100 py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center text-foreground">
                Our Resources
              </h1>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 max-w-3xl text-center">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-10">
                We're working hard to create accessible, informative resources—stay tuned! In the meantime, feel free to reach out or join our team—we'd love to connect with you!
              </p>
              <a
                href="mailto:sincerelypeoplewithperiods@gmail.com"
                className="inline-block text-primary font-semibold text-lg uppercase tracking-wide border-b-2 border-primary hover:opacity-80 transition-opacity"
              >
                Contact Us!
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default OurResources;
