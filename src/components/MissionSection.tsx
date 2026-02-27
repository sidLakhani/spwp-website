import spwpLogo from "@/assets/spwp-logo-left.png";
import ScrollReveal from "@/components/ScrollReveal";

const MissionSection = () => {
  return (
    <section className="bg-mission relative overflow-hidden py-12 lg:py-20">
      <ScrollReveal variant="fade-in">
        <div className="w-full">
          <img
            src={spwpLogo}
            alt="Sincerely, People With Periods illustration"
            className="w-full h-auto block"
          />
        </div>
      </ScrollReveal>

      <div className="max-w-6xl mx-auto px-4 mt-8 lg:mt-12">
        <ScrollReveal variant="fade-in">
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground uppercase tracking-wide text-center mb-8">
            Our Mission
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={150}>
          <p className="text-foreground/90 leading-relaxed text-base lg:text-lg text-center max-w-4xl mx-auto">
            At Sincerely, People with Periods, we are committed to breaking the stigma surrounding
            menstruation by expanding menstrual health education and addressing period poverty in schools,
            organizations, and communities. As a student-led initiative based in Richmond, Virginia,
            our mission is to empower individuals with the knowledge, resources, and support they need
            to manage their menstrual health with dignity. Through education, advocacy, and community
            action, we work to create a future where no one is held back by misinformation, shame,
            or lack of access to menstrual products.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MissionSection;
