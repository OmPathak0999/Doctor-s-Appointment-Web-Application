import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SpecialityMenu from "@/components/SpecialityMenu";
import TopDoctors from "@/components/TopDoctors";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SpecialityMenu />
        <TopDoctors />
        <Banner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
