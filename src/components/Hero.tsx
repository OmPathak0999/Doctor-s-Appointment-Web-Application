import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="hero-gradient rounded-2xl mx-4 sm:mx-6 lg:mx-8 mt-6 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-0">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left lg:py-16 z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
              Book Appointment <br />
              With Trusted Doctors
            </h1>
            
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-primary-foreground/20 border-2 border-primary-foreground flex items-center justify-center"
                  >
                    <span className="text-xs text-primary-foreground font-medium">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-primary-foreground/90 text-sm max-w-xs">
                Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
              </p>
            </div>

            <Button
              variant="secondary"
              size="lg"
              className="rounded-full px-8 gap-2 group"
            >
              Book appointment
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative mt-8 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=500&fit=crop"
              alt="Doctor team"
              className="w-full max-w-md lg:max-w-lg mx-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
