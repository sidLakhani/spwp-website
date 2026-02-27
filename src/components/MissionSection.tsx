import spwpExtended from "@/assets/spwp-extended.png";
import ScrollReveal from "@/components/ScrollReveal";

const MissionSection = () => {
  return (
    <section className="bg-mission relative overflow-hidden">
      {/* Mission Text overlaid on left */}
      <div className="relative">
        <ScrollReveal variant="fade-in">
          <div className="relative">
            <img
              src={spwpExtended}
              alt="Sincerely, People With Periods illustration"
              className="w-full h-auto block"
            />
            <div className="absolute inset-0 flex items-start pt-6 lg:pt-12">
              <div className="max-w-lg px-6 lg:px-16">
                <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground uppercase tracking-wide mb-4">
                  Our Mission
                </h2>
                <p className="text-foreground/90 leading-relaxed text-base lg:text-lg">
                  At Sincerely, People with Periods, we are committed to breaking the stigma surrounding
                  menstruation by expanding menstrual health education and addressing period poverty in schools,
                  organizations, and communities. As a student-led initiative based in Richmond, Virginia,
                  our mission is to empower individuals with the knowledge, resources, and support they need
                  to manage their menstrual health with dignity.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MissionSection;
