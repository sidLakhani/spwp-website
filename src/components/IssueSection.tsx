import { School, DollarSign, BookX, Bath, HelpCircle, Brain } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { icon: School, text: "Globally, 2 out of 5 schools (39%) provide menstrual health education." },
  { icon: DollarSign, text: "1 in 4 students can't afford period products in the US." },
  { icon: BookX, text: "1 in 5 menstruators miss school because they can't access period products." },
  { icon: Bath, text: "Over 1 billion menstruators lack access to a safe restroom for managing periods with dignity." },
  { icon: HelpCircle, text: 'More than half of women don\'t know what a "normal" cycle looks like.' },
  { icon: Brain, text: "Less than two-thirds know how many phases the menstrual cycle has." },
];

const IssueSection = () => {
  return (
    <section className="bg-issue py-12 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr,1.4fr] gap-8 lg:gap-12 items-start">
          <ScrollReveal variant="fade-left">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground uppercase tracking-wide mb-4">
              The Issue of Period Poverty
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              Period poverty is a global issue where many people lack access to menstrual products,
              hygiene facilities, and proper education about menstruation. A major barrier to change is
              the lack of education, which fuels stigma, misinformation, and policy inaction. Without
              proper knowledge, individuals may struggle to manage their periods safely, and communities
              may overlook the importance of menstrual health. Education is key to breaking this cycle—
              by spreading awareness, challenging taboos, and advocating for better resources, we can work
              toward menstrual equity and lasting change.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} variant="fade-up" delay={index * 80}>
                <stat.icon className="w-12 h-12 text-primary mb-3" strokeWidth={1.5} />
                <p className="text-sm lg:text-base font-semibold text-foreground leading-snug">
                  {stat.text}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IssueSection;
