import spwpExtended from "@/assets/spwp-extended.png";
import ScrollReveal from "@/components/ScrollReveal";

const MissionSection = () => {
  return (
    <section className="bg-mission relative overflow-hidden py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal variant="fade-in">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Mission Text - Left Side */}
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground uppercase tracking-wide mb-6 text-center lg:text-left">
                Our Mission
              </h2>
              <p className="text-foreground/90 leading-relaxed text-base lg:text-lg text-center lg:text-left">
                At Sincerely, People with Periods, we are committed to breaking the stigma surrounding
                menstruation by expanding menstrual health education and addressing period poverty in schools,
                organizations, and communities. As a student-led initiative based in Richmond, Virginia,
                our mission is to empower individuals with the knowledge, resources, and support they need
                to manage their menstrual health with dignity. Through education, advocacy, and community
                action, we work to create a future where no one is held back by misinformation, shame,
                or lack of access to menstrual products.
              </p>
            </div>

            {/* Logo - Right Side */}
            <div className="lg:w-1/2 order-1 lg:order-2">
              <img
                src={spwpExtended}
                alt="Sincerely, People With Periods illustration"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MissionSection;
