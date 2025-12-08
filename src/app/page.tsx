import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import Services from "@/components/Services";

import Provimento74 from "@/components/Provimento74";
import About from "@/components/About";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <PainPoints />
      <Solution />
      <Services />

      <Provimento74 />
      <About />
      <SocialProof />
      <FinalCTA />
      <Footer />
      <WhatsAppBtn />
    </main>
  );
}
