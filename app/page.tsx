import { Navbar1 } from "@/components/sections/navbar1";
import { Hero34 } from "@/components/sections/hero34";
import { TherapistBio } from "@/components/sections/therapist-bio";
import { LocationSpaceTabs } from "@/components/sections/location-space-tabs";
import { therapistData } from "@/lib/data/therapist";
import { Feature15 } from "@/components/sections/feature15";
import { Contact2 } from "@/components/sections/contact2";
import { Footer7 } from "@/components/sections/footer7";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar1 />
      <div className="flex-1">
        <Hero34 />
        <TherapistBio {...therapistData} />
        <Feature15 />
        <LocationSpaceTabs />
        <Contact2 />
      </div>
      <Footer7 />
    </main>
  );
}
