import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="hero-gradient rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight mb-4">
                Book Appointment <br />
                With 100+ Trusted Doctors
              </h2>
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full px-8 gap-2 group"
              >
                Create account
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <img
                src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&h=350&fit=crop"
                alt="Doctor"
                className="w-64 lg:w-80 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
