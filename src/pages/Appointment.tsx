import { useParams } from "react-router-dom";
import { useState } from "react";
import { CheckCircle, Info } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import DoctorCard from "@/components/DoctorCard";

const allDoctors = [
  {
    id: "1",
    name: "Dr. Richard Nicolas",
    speciality: "General physician",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
    available: true,
    experience: "4 Years",
    about: "Dr. Richard Nicolas has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fee: 500, // INR
  },
  {
    id: "2",
    name: "Dr. Emma",
    speciality: "Gynecologist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face",
    available: true,
    experience: "6 Years",
    about: "Dr. Emma specializes in women's health and reproductive medicine, providing comprehensive care with a compassionate approach.",
    fee: 60,
  },
  {
    id: "3",
    name: "Dr. Sunita Patel",
    speciality: "Dermatologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    available: false,
    experience: "5 Years",
    about: "Dr. Sunita Patel is an expert in skin care and dermatological treatments, helping patients achieve healthy and radiant skin.",
    fee: 55,
  },
  {
    id: "4",
    name: "Dr. Van Lee",
    speciality: "Pediatricians",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face",
    available: true,
    experience: "8 Years",
    about: "Dr. Van Lee is dedicated to children's health, providing gentle and thorough care for infants to adolescents.",
    fee: 45,
  },
  {
    id: "5",
    name: "Dr. Jennifer Leo",
    speciality: "Neurologist",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=300&h=300&fit=crop&crop=face",
    available: true,
    experience: "10 Years",
    about: "Dr. Jennifer Leo specializes in neurological disorders, offering expert diagnosis and treatment for complex conditions.",
    fee: 80,
  },
];

const timeSlots = [
  "10:00 am", "10:30 am", "11:00 am", "11:30 am",
  "12:00 pm", "12:30 pm", "01:00 pm", "01:30 pm",
];

const Appointment = () => {
  const { docId } = useParams();
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedTime, setSelectedTime] = useState("");

  const doctor = allDoctors.find(d => d.id === docId) || allDoctors[0];
  const relatedDoctors = allDoctors.filter(d => d.speciality === doctor.speciality && d.id !== doctor.id).slice(0, 4);

  // Generate next 7 days
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return {
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      date: date.getDate(),
    };
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Doctor Details */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="lg:w-72">
            <div className="bg-primary rounded-lg p-4">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div className="flex-1 border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-2xl font-semibold text-foreground">{doctor.name}</h1>
              <CheckCircle className="w-5 h-5 text-primary" />
            </div>
            
            <div className="flex items-center gap-3 text-muted-foreground mb-4">
              <span>{doctor.speciality}</span>
              <span className="px-2 py-1 border border-border rounded text-xs">
                {doctor.experience}
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium text-foreground">About</span>
                <Info className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {doctor.about}
              </p>
            </div>

            <p className="text-foreground">
              Appointment fee: <span className="font-semibold">₹{doctor.fee}</span>
            </p>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-muted-foreground mb-4">Booking slots</h2>
          
          {/* Day Selection */}
          <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
            {days.map((day, index) => (
              <button
                key={index}
                onClick={() => setSelectedDay(index)}
                className={`flex flex-col items-center justify-center min-w-[60px] py-4 px-4 rounded-full transition-all ${
                  selectedDay === index
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-primary"
                }`}
              >
                <span className="text-xs">{day.day}</span>
                <span className="font-semibold">{day.date}</span>
              </button>
            ))}
          </div>

          {/* Time Selection */}
          <div className="flex flex-wrap gap-3 mb-6">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-5 py-2 rounded-full text-sm transition-all ${
                  selectedTime === time
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-primary"
                }`}
              >
                {time}
              </button>
            ))}
          </div>

          <Button className="rounded-full px-12">
            Book an appointment
          </Button>
        </div>

        {/* Related Doctors */}
        {relatedDoctors.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-foreground text-center mb-2">
              Related Doctors
            </h2>
            <p className="text-muted-foreground text-center mb-6">
              Simply browse through our extensive list of trusted doctors.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedDoctors.map((doc) => (
                <DoctorCard key={doc.id} {...doc} />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Appointment;
