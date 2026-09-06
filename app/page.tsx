import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Overview } from "@/components/Overview";
import { Spaces } from "@/components/Spaces";
import { Amenities } from "@/components/Amenities";
import { WhyCPJK } from "@/components/WhyCPJK";
import { VirtualOffice } from "@/components/VirtualOffice";
import { HowItWorks } from "@/components/HowItWorks";
import { Location } from "@/components/Location";
import { Enquiry } from "@/components/Enquiry";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Overview />
      <Spaces />
      <Amenities />
      <WhyCPJK />
      <VirtualOffice />
      <HowItWorks />
      <Location />
      <Enquiry />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
