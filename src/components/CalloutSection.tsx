import { Link } from "react-router-dom";
import { Users, Calendar, Heart } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const callouts = [
  {
    title: "About Us",
    description: "Meet Our Team and Our Mission",
    icon: Users,
    href: "/our-story",
    bgClass: "bg-callout-pink",
  },
  {
    title: "Our Events",
    description: "Join Us in an Upcoming Event",
    icon: Calendar,
    href: "/events/upcoming",
    bgClass: "bg-callout-yellow",
  },
  {
    title: "Get Involved",
    description: "Volunteer, Participate, or Donate!",
    icon: Heart,
    href: "/volunteer",
    bgClass: "bg-callout-blue",
  },
];

const CalloutSection = () => {
  return (
    <section className="py-8 lg:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {callouts.map((callout, index) => (
            <ScrollReveal key={callout.title} variant="fade-up" delay={index * 100}>
              <Link
                to={callout.href}
                className={`${callout.bgClass} block p-6 lg:p-8 rounded-xl text-center hover:scale-[1.02] transition-transform duration-300 group`}
              >
                <callout.icon className="w-10 h-10 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h2 className="text-xl lg:text-2xl font-serif font-bold text-foreground mb-2">
                  {callout.title}
                </h2>
                <p className="text-muted-foreground">{callout.description}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CalloutSection;
