import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import ServiceDetails from "@/components/ServiceDetails";
import About from "@/components/About";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PainPoints />
      <Solution />
      <Services />
      <ServiceDetails />
      <About />
      <SocialProof />
      <FinalCTA />
      <Footer />
      <WhatsAppBtn />
    </main>
  );
}
