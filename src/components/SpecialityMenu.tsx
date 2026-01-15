import { Link } from "react-router-dom";

const specialities = [
  {
    name: "General physician",
    icon: "🩺",
    slug: "general-physician",
  },
  {
    name: "Gynecologist",
    icon: "👩‍⚕️",
    slug: "gynecologist",
  },
  {
    name: "Dermatologist",
    icon: "🧴",
    slug: "dermatologist",
  },
  {
    name: "Pediatricians",
    icon: "👶",
    slug: "pediatricians",
  },
  {
    name: "Neurologist",
    icon: "🧠",
    slug: "neurologist",
  },
  {
    name: "Gastroenterologist",
    icon: "🫃",
    slug: "gastroenterologist",
  },
];

const SpecialityMenu = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3">
            Find by Speciality
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
          {specialities.map((speciality, index) => (
            <Link
              key={speciality.slug}
              to={`/doctors?speciality=${speciality.slug}`}
              className="flex flex-col items-center gap-3 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-secondary flex items-center justify-center text-3xl sm:text-4xl transition-all duration-300 group-hover:bg-primary group-hover:scale-105">
                <span className="group-hover:scale-110 transition-transform">
                  {speciality.icon}
                </span>
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-primary transition-colors text-center max-w-[100px]">
                {speciality.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialityMenu;
