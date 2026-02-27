import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import spwpLogo from "@/assets/spwp-logo-left.png";

const OurStory = () => {
  return (
    <>
      <Helmet>
        <title>Our Story | Sincerely, People With Periods</title>
        <meta name="description" content="Learn about the founding story and mission of Sincerely, People With Periods." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <section className="bg-hero py-16 lg:py-24 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal variant="fade-up">
                <h1 className="font-serif text-3xl lg:text-5xl font-bold text-foreground mb-6">Our Story</h1>
                <p className="text-lg text-muted-foreground">How a group of students started a movement for menstrual equity</p>
              </ScrollReveal>
            </div>
          </section>

          <section className="py-12 lg:py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal variant="fade-in">
                <div className="w-full mb-10 -mx-4 lg:-mx-8">
                  <img src={spwpLogo} alt="SPWP Logo" className="w-full h-auto block" />
                </div>
              </ScrollReveal>

              <div className="space-y-6 text-foreground/90 leading-relaxed">
                {[
                  "Sincerely, People with Periods was founded by a group of passionate students in Richmond, Virginia, who recognized the urgent need to address period poverty in their community.",
                  "What began as a small awareness campaign has grown into a movement dedicated to ensuring that everyone has access to menstrual products and education, regardless of their circumstances.",
                  "Our name reflects our core belief: this isn't just about products—it's about people. Every person who menstruates deserves dignity, education, and support. Through community events, educational workshops, and product drives, we're working to make that vision a reality.",
                  "As a student-led organization, we bring fresh perspectives and unwavering energy to the fight against period poverty. We believe that young people have the power to create lasting change, and we invite everyone to join us in this mission.",
                ].map((text, i) => (
                  <ScrollReveal key={i} variant="fade-up" delay={i * 100}>
                    <p>{text}</p>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default OurStory;
