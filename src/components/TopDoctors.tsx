import { Link } from "react-router-dom";
import DoctorCard from "./DoctorCard";

const doctors = [
  {
    id: "1",
    name: "Dr. Richard Nicolas",
    speciality: "General physician",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
    available: true,
  },
  {
    id: "2",
    name: "Dr. Emma",
    speciality: "Gynecologist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face",
    available: true,
  },
  {
    id: "3",
    name: "Dr. Sunita Patel",
    speciality: "Dermatologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    available: false,
  },
  {
    id: "4",
    name: "Dr. Van Lee",
    speciality: "Pediatricians",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face",
    available: true,
  },
  {
    id: "5",
    name: "Dr. Jennifer Leo",
    speciality: "Neurologist",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=300&h=300&fit=crop&crop=face",
    available: true,
  },
  {
    id: "6",
    name: "Dr. Shawn Williams",
    speciality: "Gastroenterologist",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&h=300&fit=crop&crop=face",
    available: true,
  },
  {
    id: "7",
    name: "Dr. Sanju Samson",
    speciality: "General physician",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face",
    available: true,
  },
  {
    id: "8",
    name: "Dr. Annie",
    speciality: "Gynecologist",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=300&h=300&fit=crop&crop=face",
    available: true,
  },
];

const TopDoctors = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3">
            Top Doctors to Book
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Simply browse through our extensive list of trusted doctors.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <DoctorCard {...doctor} />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/doctors"
            className="inline-block px-8 py-3 bg-secondary text-foreground rounded-full font-medium hover:bg-secondary/80 transition-colors"
          >
            more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopDoctors;
