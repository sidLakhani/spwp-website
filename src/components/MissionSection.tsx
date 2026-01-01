import spwpLogo from "@/assets/spwp-logo-left.png";

const MissionSection = () => {
  return (
    <section className="bg-mission relative overflow-hidden py-12 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground uppercase tracking-wide text-center mb-8">
          Our Mission
        </h2>

        <div className="grid lg:grid-cols-[300px,1fr] xl:grid-cols-[400px,1fr] gap-8 lg:gap-12 items-center">
          {/* Logo Illustration */}
          <div className="flex justify-center lg:justify-start animate-slide-in-left">
            <img
              src={spwpLogo}
              alt="Sincerely, People With Periods illustration"
              className="w-64 lg:w-full max-w-[400px] h-auto"
            />
          </div>

          {/* Mission Text */}
          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
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
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
