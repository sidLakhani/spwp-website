import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import aarushiKhanna from "@/assets/team/aarushi-khanna.jpg";
import widadKhan from "@/assets/team/widad-khan.jpg";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { name: "Aarushi Khanna", role: "Founder + Executive Director", image: aarushiKhanna },
  { name: "Widad M. Khan", role: "Social Media Manager", image: widadKhan },
  { name: "Team Member 3", role: "Role Title", image: "" },
  { name: "Team Member 4", role: "Role Title", image: "" },
  { name: "Team Member 5", role: "Role Title", image: "" },
  { name: "Team Member 6", role: "Role Title", image: "" },
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-xl bg-muted aspect-square mb-4 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                <span className="text-6xl text-primary/40">👤</span>
              </div>
            )}
          </div>
          <h3 className="text-lg font-semibold text-foreground text-center">{member.name}</h3>
          <p className="text-sm text-muted-foreground text-center">{member.role}</p>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-lg p-0 overflow-hidden bg-card">
        <div className="aspect-square w-full">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
              <span className="text-9xl text-primary/40">👤</span>
            </div>
          )}
        </div>
        <div className="p-6 text-center">
          <h3 className="text-2xl font-bold text-foreground">{member.name}</h3>
          <p className="text-muted-foreground mt-1">{member.role}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Our Team | Sincerely, People With Periods</title>
        <meta name="description" content="Meet the dedicated team behind Sincerely, People With Periods working to end period poverty." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary to-background py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              Meet Our Team
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals dedicated to ending period poverty and creating lasting change in our communities.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-12">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Team;
