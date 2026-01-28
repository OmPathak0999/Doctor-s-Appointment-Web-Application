import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DoctorCard from "@/components/DoctorCard";

const specialities = [
  "General physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatricians",
  "Neurologist",
  "Gastroenterologist",
];

const allDoctors = [
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
    name: "Dr.Van Lee",
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
  {
    id: "9",
    name: "Dr. Harris Khan",
    speciality: "Dermatologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
    available: true,
  },
  {
    id: "10",
    name: "Dr. Annie Carl",
    speciality: "Pediatricians",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face",
    available: true,
  },
];

const Doctors = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSpeciality = searchParams.get("speciality") || "";
  
  const [activeFilter, setActiveFilter] = useState(
    specialities.find(s => s.toLowerCase().replace(/\s+/g, '-') === selectedSpeciality) || ""
  );

  const filteredDoctors = activeFilter
    ? allDoctors.filter(doctor => doctor.speciality === activeFilter)
    : allDoctors;

  const handleFilterClick = (speciality: string) => {
    if (activeFilter === speciality) {
      setActiveFilter("");
      setSearchParams({});
    } else {
      setActiveFilter(speciality);
      setSearchParams({ speciality: speciality.toLowerCase().replace(/\s+/g, '-') });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-muted-foreground mb-6">
          Browse through the doctors specialist.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-48 flex-shrink-0">
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
              {specialities.map((speciality) => (
                <button
                  key={speciality}
                  onClick={() => handleFilterClick(speciality)}
                  className={`px-4 py-2 text-sm rounded-lg border whitespace-nowrap transition-all ${
                    activeFilter === speciality
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {speciality}
                </button>
              ))}
            </div>
          </div>

          {/* Doctors Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredDoctors.map((doctor, index) => (
                <div
                  key={doctor.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <DoctorCard {...doctor} />
                </div>
              ))}
            </div>

            {filteredDoctors.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No doctors found for this speciality.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Doctors;
