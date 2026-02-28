import spwpExtended from "@/assets/spwp-extended.png";
import spwpExtendedMobile from "@/assets/spwp-extended-mobile.png";
import ScrollReveal from "@/components/ScrollReveal";

const MissionSection = () => {
  return (
    <section className="bg-mission relative overflow-hidden">
      <ScrollReveal variant="fade-in">
        {/* Desktop: overlay text on image */}
        <div className="relative hidden lg:block">
          <img
            src={spwpExtended}
            alt="Sincerely, People With Periods illustration"
            className="w-full h-auto block"
          />
          <div className="absolute inset-0 flex items-start pt-[5%]">
            <div className="w-[45%] pl-[4%] pr-[2%]">
              <h2 className="font-serif text-[clamp(2.5rem,4vw,3.75rem)] font-bold text-foreground uppercase tracking-wide">
                Our Mission
              </h2>
              <p className="mt-[3%] text-foreground/90 leading-relaxed text-[clamp(1rem,1.5vw,1.4rem)]">
                At Sincerely, People with Periods, we are committed to breaking the stigma surrounding
                menstruation by expanding menstrual health education and addressing period poverty in schools,
                organizations, and communities. As a student-led initiative based in Richmond, Virginia,
                our mission is to empower individuals with the knowledge, resources, and support they need
                to manage their menstrual health with dignity.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: stack text below image */}
        <div className="lg:hidden">
          <img
            src={spwpExtendedMobile}
            alt="Sincerely, People With Periods illustration"
            className="w-full h-auto block"
          />
          <div className="px-6 py-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide mb-4">
              Our Mission
            </h2>
            <p className="text-foreground/90 leading-relaxed text-[19px] md:text-[21px]">
              At Sincerely, People with Periods, we are committed to breaking the stigma surrounding
              menstruation by expanding menstrual health education and addressing period poverty in schools,
              organizations, and communities. As a student-led initiative based in Richmond, Virginia,
              our mission is to empower individuals with the knowledge, resources, and support they need
              to manage their menstrual health with dignity.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default MissionSection;
