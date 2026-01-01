import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";

const HeroSection = () => {
  return (
    <section className="bg-hero py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {[photo1, photo2, photo3].map((photo, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img
                src={photo}
                alt={`Community photo ${index + 1}`}
                className="w-full max-w-[280px] lg:max-w-[320px] aspect-[3/4] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
