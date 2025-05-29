import { Navbar1 } from "@/components/sections/navbar1";
import { Hero34 } from "@/components/sections/hero34";
import { Overmij } from "@/components/sections/overmij";
import { LocationSpaceTabs } from "@/components/sections/location-space-tabs";
import { therapistData } from "@/lib/data/therapist";
import { Feature15 } from "@/components/sections/feature15";
import { Contact2 } from "@/components/sections/contact2";
import { Footer7 } from "@/components/sections/footer7";
import { Faq1 } from "@/components/sections/faq1";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* <div className="bg-gradient-to-b from-[#F5F0D8] to-white"> */}
      <div className="bg-[url('/img/hero4.png')] bg-cover bg-center bg-no-repeat">
        <Navbar1 />
        <Hero34 />
      </div>
      <div className="flex-1">
        <Overmij {...therapistData} />
        <Feature15 />
        <LocationSpaceTabs />
        <Contact2 /> 
        <Faq1 />
      </div>
      <Footer7 />
    </main>
  );
}
