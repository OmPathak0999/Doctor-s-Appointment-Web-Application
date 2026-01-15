import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-medium text-muted-foreground">
            ABOUT <span className="text-foreground font-semibold">US</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop"
              alt="About Prescripto"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
            </p>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-xl font-medium text-center mb-8">
            WHY <span className="text-foreground font-semibold">CHOOSE US</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-border rounded-lg p-8 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group cursor-pointer">
              <h3 className="font-semibold mb-3 group-hover:text-primary-foreground">EFFICIENCY:</h3>
              <p className="text-muted-foreground text-sm group-hover:text-primary-foreground/80">
                Streamlined appointment scheduling that fits into your busy lifestyle.
              </p>
            </div>
            <div className="border border-border rounded-lg p-8 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group cursor-pointer">
              <h3 className="font-semibold mb-3 group-hover:text-primary-foreground">CONVENIENCE:</h3>
              <p className="text-muted-foreground text-sm group-hover:text-primary-foreground/80">
                Access to a network of trusted healthcare professionals in your area.
              </p>
            </div>
            <div className="border border-border rounded-lg p-8 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group cursor-pointer">
              <h3 className="font-semibold mb-3 group-hover:text-primary-foreground">PERSONALIZATION:</h3>
              <p className="text-muted-foreground text-sm group-hover:text-primary-foreground/80">
                Tailored recommendations and reminders to help you stay on top of your health.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
