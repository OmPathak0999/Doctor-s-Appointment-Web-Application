import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-medium text-muted-foreground">
            CONTACT <span className="text-foreground font-semibold">US</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-5xl mx-auto">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=400&fit=crop"
              alt="Contact us"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-muted-foreground mb-4">OUR OFFICE</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>54709 Willms Station</p>
                <p>Suite 350, Washington, USA</p>
                <p className="pt-2">Tel: (415) 555-0132</p>
                <p>Email: prescripto@gmail.com</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-muted-foreground mb-4">CAREERS AT PRESCRIPTO</h3>
              <p className="text-muted-foreground mb-4">
                Learn more about our teams and job openings.
              </p>
              <button className="px-6 py-3 border border-foreground text-foreground rounded hover:bg-foreground hover:text-background transition-colors duration-300">
                Explore Jobs
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
